"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { Footprint, supabase } from "../../lib/supabase";

const stamps = {
  starSolid: "\u2726",
  starOpen: "\u2727",
  dot: "\u00B7",
  heart: "\u2661",
  butterfly: "\u029A\u025E",
  butterflyI: "\u029A\u0457\u025E",
  swirl: "\u061B\u0B0A"
};

const moodOptions = [
  stamps.starSolid,
  stamps.starOpen,
  "*",
  stamps.dot,
  stamps.heart,
  stamps.butterfly,
  stamps.butterflyI,
  stamps.swirl
];
const maxMessageLength = 50;
const submitCooldownMs = 10000; // 10 seconds

function cleanText(value: string, maxLength: number) {
  return value
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function getSafeMood(value: string) {
  return moodOptions.includes(value) ? value : stamps.starSolid;
}

function getStarPosition(id: string, index: number) {
  const seed = Array.from(id).reduce((total, char) => total + char.charCodeAt(0), index * 17);
  const x = 8 + (seed * 37) % 84;
  const y = 12 + (seed * 53) % 72;
  return { x, y };
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  }).format(new Date(value));
}

export function FootprintGuestbook() {
  const [footprints, setFootprints] = useState<Footprint[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [mood, setMood] = useState(stamps.starSolid);
  const [website, setWebsite] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const constellation = useMemo(
    () => footprints.map((footprint, index) => ({
      ...footprint,
      position: getStarPosition(footprint.id, index)
    })),
    [footprints]
  );

  const constellationLines = useMemo(() => {
    return constellation.slice(0, 16).flatMap((footprint, index, items) => {
      const next = items[index + 1];
      if (!next) {
        return [];
      }

      return [{
        id: `${footprint.id}-${next.id}`,
        x1: footprint.position.x,
        y1: footprint.position.y,
        x2: next.position.x,
        y2: next.position.y
      }];
    });
  }, [constellation]);

  const activeFootprint = constellation.find((footprint) => footprint.id === activeId) ?? constellation[0];

  async function loadFootprints() {
    if (!supabase) {
      setStatus("Supabase env vars are missing.");
      setIsLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("footprints")
      .select("id, name, message, mood, created_at")
      .order("created_at", { ascending: false })
      .limit(40);

    if (error) {
      setStatus("Could not load footprints yet.");
    } else {
      setFootprints(data ?? []);
      setActiveId(data?.[0]?.id ?? null);
      setStatus("");
    }

    setIsLoading(false);
  }

  useEffect(() => {
    void loadFootprints();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedMessage = cleanText(message, maxMessageLength);
    const trimmedName = cleanText(name, 40);
    const safeMood = getSafeMood(mood);

    if (!supabase) {
      setStatus("Supabase env vars are missing.");
      return;
    }

    if (website) {
      setStatus("Saved.");
      return;
    }

    if (!trimmedMessage) {
      setStatus("Leave a tiny thought first.");
      return;
    }

    const lastSubmittedAt = Number(window.localStorage.getItem("last-footprint-submit") ?? 0);
    if (Date.now() - lastSubmittedAt < submitCooldownMs) {
      setStatus("Give the archive a tiny moment before signing again.");
      return;
    }

    setIsSubmitting(true);
    setStatus("");

    const { data, error } = await supabase
      .from("footprints")
      .insert({
        name: trimmedName || "someone",
        message: trimmedMessage,
        mood: safeMood
      })
      .select("id, name, message, mood, created_at")
      .single();

    if (error) {
      setStatus("The footprint did not save. Check your Supabase insert policy.");
    } else if (data) {
      setFootprints((current) => [data, ...current]);
      setActiveId(data.id);
      setName("");
      setMessage("");
      setMood(stamps.starSolid);
      setWebsite("");
      window.localStorage.setItem("last-footprint-submit", Date.now().toString());
      setStatus("Saved. Your footprint joined the archive.");
    }

    setIsSubmitting(false);
  }

  return (
    <div className="footprint-guestbook">
      <section className="footprint-constellation" aria-label="Visitor constellation">
        <div className="footprint-constellation-copy">
          <p className="archive-kicker"></p>
          <h2>Become part of the sky.</h2>
          {activeFootprint ? (
            <article className="footprint-preview">
              <span>{getSafeMood(activeFootprint.mood)}</span>
              <p>{activeFootprint.message}</p>
              <small>{activeFootprint.name || "someone"}</small>
            </article>
          ) : null}
          <button
            type="button"
            className="footprint-refresh"
            onClick={() => {
              setIsLoading(true);
              void loadFootprints();
            }}
          >
            refresh sky -&gt;
          </button>
        </div>
        <div className="footprint-star-field">
          {isLoading ? (
            <p className="footprint-empty">loading tiny lights...</p>
          ) : constellation.length > 0 ? (
            <>
              <svg className="footprint-constellation-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                {constellationLines.map((line) => (
                  <line
                    key={line.id}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                  />
                ))}
              </svg>
              {constellation.map((footprint) => (
                <button
                  key={footprint.id}
                  type="button"
                  className={`footprint-star ${getSafeMood(footprint.mood) === stamps.butterfly ? "footprint-butterfly-stamp" : ""} ${activeId === footprint.id ? "is-active" : ""}`}
                  style={{
                    left: `${footprint.position.x}%`,
                    top: `${footprint.position.y}%`
                  }}
                  aria-label={`Open footprint from ${footprint.name || "someone"}`}
                  title={`${footprint.name ?? "someone"}: ${footprint.message}`}
                  onClick={() => setActiveId(footprint.id)}
                  onMouseEnter={() => setActiveId(footprint.id)}
                >
                  {getSafeMood(footprint.mood)}
                </button>
              ))}
            </>
          ) : (
            <p className="footprint-empty">be the first soft little mark.</p>
          )}
        </div>
      </section>

      <section className="footprint-board">
        <form className="footprint-form" onSubmit={handleSubmit}>
          <p className="archive-kicker">leave a footprint</p>
          <label>
            name
            <input
              value={name}
              onChange={(event) => setName(event.target.value.slice(0, 40))}
              maxLength={40}
              placeholder="someone"
            />
          </label>
          <label>
            tiny thought
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value.slice(0, maxMessageLength))}
              maxLength={maxMessageLength}
              placeholder="write a tiny note"
              required
            />
          </label>
          <label className="footprint-honeypot" aria-hidden="true">
            website
            <input
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
          <div className="footprint-stamp-picker" aria-label="Choose a stamp">
            {moodOptions.map((option) => (
              <button
                key={option}
                type="button"
                className={mood === option ? "is-selected" : ""}
                onClick={() => setMood(option)}
                aria-pressed={mood === option}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="footprint-form-footer">
            <span>{message.length}/{maxMessageLength}</span>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "saving..." : "sign archive ->"}
            </button>
          </div>
          {status ? <p className="footprint-status" aria-live="polite">{status}</p> : null}
        </form>

        <div className="footprint-notes">
          {footprints.map((footprint, index) => (
            <article
              key={footprint.id}
              className={`footprint-note ${activeId === footprint.id ? "is-active" : ""} ${index === 0 ? "is-newest" : ""}`}
              style={{ "--tilt": `${(index % 5) - 2}deg` } as React.CSSProperties}
              tabIndex={0}
              onClick={() => setActiveId(footprint.id)}
              onMouseEnter={() => setActiveId(footprint.id)}
              onFocus={() => setActiveId(footprint.id)}
            >
              <span className="footprint-note-stamp">{getSafeMood(footprint.mood)}</span>
              <p>{footprint.message}</p>
              <footer>
                <span>{footprint.name || "someone"}</span>
                <time dateTime={footprint.created_at}>{formatDate(footprint.created_at)}</time>
              </footer>
            </article>
          ))}
          {!isLoading && footprints.length === 0 ? (
            <article className="footprint-note footprint-note-empty">
              <span className="footprint-note-stamp">{stamps.butterfly}</span>
              <p>No footprints yet. Leave the first tiny mark.</p>
            </article>
          ) : null}
        </div>
      </section>
    </div>
  );
}
