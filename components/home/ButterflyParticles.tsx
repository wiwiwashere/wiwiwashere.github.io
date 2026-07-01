type ParticleKind = "fill" | "edge" | "vein" | "body" | "spark";

type Particle = {
  index: number;
  x: number;
  y: number;
  z: number;
  size: number;
  opacity: number;
  kind: ParticleKind;
  delay: number;
};

function seededNoise(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

const particles: Particle[] = [];

function pushParticle(x: number, y: number, z: number, size: number, opacity: number, kind: ParticleKind) {
  const index = particles.length;
  particles.push({ index, x, y, z, size, opacity, kind, delay: (index % 29) * -0.11 });
}

function addWing(options: {
  side: -1 | 1;
  upper: boolean;
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  count: number;
}) {
  const { side, upper, cx, cy, rx, ry, count } = options;

  for (let i = 0; i < count; i += 1) {
    const a = seededNoise(i * 7 + cx + cy) * Math.PI * 2;
    const radius = Math.sqrt(seededNoise(i * 13 + rx + ry));
    const scallop = 1 + Math.sin(a * 5 + (upper ? 0.8 : 1.9)) * 0.08;
    const taper = upper ? 1 + Math.max(0, Math.sin(a)) * 0.16 : 0.92 + Math.max(0, -Math.sin(a)) * 0.18;
    const localX = Math.cos(a) * rx * radius * scallop;
    const localY = Math.sin(a) * ry * radius * taper;
    const tilt = upper ? -0.32 : 0.26;
    const x = side * (cx + localX + localY * tilt * 0.35);
    const y = cy + localY + Math.abs(localX) * (upper ? -0.05 : 0.035);
    const z = (1 - radius) * 70 + Math.sin(a * 3) * 24 + side * 16;
    const kind: ParticleKind = radius > 0.88 ? "edge" : "fill";
    const size = kind === "edge" ? 4.2 + seededNoise(i + 8) * 2.2 : 2.2 + seededNoise(i + 3) * 2.8;
    const opacity = kind === "edge" ? 0.72 : 0.34 + seededNoise(i + 4) * 0.34;
    pushParticle(x, y, z, size, opacity, kind);
  }

  const veinAngles = upper ? [-0.72, -0.38, -0.08, 0.24] : [0.18, 0.48, 0.78];
  veinAngles.forEach((angle, veinIndex) => {
    for (let step = 0; step < 24; step += 1) {
      const t = step / 23;
      const bend = Math.sin(t * Math.PI) * (upper ? -24 : 18);
      const x = side * (18 + cx * t + Math.cos(angle) * rx * 0.72 * t + bend * 0.28);
      const y = 8 + cy * t + Math.sin(angle) * ry * 0.82 * t + bend;
      const z = 44 + Math.sin(t * Math.PI + veinIndex) * 22;
      pushParticle(x, y, z, 2.1 + seededNoise(step + veinIndex) * 1.1, 0.62, "vein");
    }
  });
}

addWing({ side: -1, upper: true, cx: 104, cy: -76, rx: 104, ry: 156, count: 130 });
addWing({ side: 1, upper: true, cx: 104, cy: -76, rx: 104, ry: 156, count: 130 });
addWing({ side: -1, upper: false, cx: 82, cy: 88, rx: 92, ry: 112, count: 92 });
addWing({ side: 1, upper: false, cx: 82, cy: 88, rx: 92, ry: 112, count: 92 });

for (let i = 0; i < 70; i += 1) {
  const t = i / 69;
  const x = Math.sin(t * Math.PI * 2) * 8;
  const y = -116 + t * 246;
  const z = 84 + Math.cos(t * Math.PI * 2) * 18;
  pushParticle(x, y, z, 3.2 + seededNoise(i) * 2.2, 0.75, "body");
}

for (let i = 0; i < 34; i += 1) {
  const t = i / 33;
  const side = i % 2 === 0 ? -1 : 1;
  const x = side * (12 + 54 * t + Math.sin(t * Math.PI) * 20);
  const y = -124 - 80 * t;
  const z = 96 + t * 30;
  pushParticle(x, y, z, 2.1, 0.6, "vein");
}

const sparkPositions = [
  [-150, -138, 126], [152, -150, 120], [-132, 40, 104], [132, 32, 110],
  [-48, -184, 140], [58, 164, 88], [198, -36, 122], [-210, -24, 116]
];
sparkPositions.forEach(([x, y, z], i) => pushParticle(x, y, z, 6 + (i % 3), 0.86, "spark"));

const stars = [
  { index: 0, x: 62, y: 18, size: 34, delay: "-0.1s", variant: "burst" },
  { index: 1, x: 78, y: 14, size: 22, delay: "-0.7s", variant: "hollow" },
  { index: 2, x: 88, y: 30, size: 30, delay: "-1.4s", variant: "burst" },
  { index: 3, x: 72, y: 48, size: 18, delay: "-2.2s", variant: "dot" },
  { index: 4, x: 92, y: 58, size: 24, delay: "-3.0s", variant: "hollow" },
  { index: 5, x: 84, y: 78, size: 20, delay: "-2.9s", variant: "dot" },
  { index: 6, x: 56, y: 38, size: 18, delay: "-4.0s", variant: "hollow" },
  { index: 7, x: 96, y: 42, size: 16, delay: "-4.8s", variant: "dot" }
];

const meteors = [
  { top: "14%", left: "8%", width: "210px", delay: "-0.2s", duration: "7s" },
  { top: "34%", left: "54%", width: "150px", delay: "-3.4s", duration: "8.4s" },
  { top: "68%", left: "18%", width: "180px", delay: "-5.8s", duration: "9.2s" }
];

export function ButterflyParticles() {
  return (
    <div className="butterfly-field" aria-hidden="true">
      <CelestialParticles />
      <div className="butterfly-trail butterfly-trail-one" />
      <div className="butterfly-trail butterfly-trail-two" />
      <div className="butterfly-cloud">
        {particles.map((particle) => (
          <span
            key={particle.index}
            className={`butterfly-particle butterfly-particle-${particle.kind}`}
            style={{
              "--x": `${particle.x}px`,
              "--y": `${particle.y}px`,
              "--z": `${particle.z}px`,
              "--size": `${particle.size}px`,
              "--opacity": particle.opacity,
              "--delay": `${particle.delay}s`
            } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  );
}

export function CelestialParticles() {
  return (
    <>
      <div className="butterfly-meteor-layer">
        {meteors.map((meteor, index) => (
          <span
            key={index}
            className="butterfly-meteor"
            style={{
              top: meteor.top,
              left: meteor.left,
              width: meteor.width,
              "--meteor-delay": meteor.delay,
              "--meteor-duration": meteor.duration
            } as React.CSSProperties}
          />
        ))}
      </div>
      <div className="butterfly-star-layer">
        {stars.map((star) => (
          <span
            key={star.index}
            className={`butterfly-star butterfly-star-${star.variant}`}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              "--star-delay": star.delay
            } as React.CSSProperties}
          />
        ))}
      </div>
    </>
  );
}
