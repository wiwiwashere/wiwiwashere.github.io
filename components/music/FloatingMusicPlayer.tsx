"use client";

import { useState } from "react";
import { musicPicks } from "@/data/home";

const playlist = musicPicks[0];

export function FloatingMusicPlayer() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  function togglePlayer() {
    if (!isOpen) setHasOpened(true);
    setIsOpen((current) => !current);
  }

  return (
    <aside className={`floating-music ${isOpen ? "is-open" : ""}`} aria-label="Persistent music player">
      <button
        className="floating-music-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="floating-music-panel"
        onClick={togglePlayer}
      >
        {/* <span aria-hidden="true"></span> */}
        <span>⇄ ◃◃   ⅠⅠ   ▹▹ ↻</span>
      </button>
      <div id="floating-music-panel" className="floating-music-panel" aria-hidden={!isOpen} inert={!isOpen}>
        <div className="floating-music-heading">
          <span>background music</span>
          <button type="button" onClick={() => setIsOpen(false)} aria-label="Close music player">
            x
          </button>
        </div>
        {hasOpened ? (
          <iframe
            className="floating-spotify-embed"
            src={playlist.embedUrl}
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify playlist"
          />
        ) : null}
      </div>
    </aside>
  );
}
