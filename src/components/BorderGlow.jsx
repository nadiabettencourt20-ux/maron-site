import { useRef, useCallback } from "react";
import "./BorderGlow.css";

function parseHSL(hslStr) {
  const match = hslStr.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);

  if (!match) {
    return {
      h: 35,
      s: 85,
      l: 80,
    };
  }

  return {
    h: parseFloat(match[1]),
    s: parseFloat(match[2]),
    l: parseFloat(match[3]),
  };
}

function buildGlowVars(glowColor, intensity) {
  const { h, s, l } = parseHSL(glowColor);
  const base = `${h}deg ${s}% ${l}%`;

  return {
    "--glow-color": `hsl(${base} / ${100 * intensity}%)`,
    "--glow-color-soft": `hsl(${base} / ${35 * intensity}%)`,
  };
}

const BorderGlow = ({
  children,
  className = "",
  edgeSensitivity = 30,
  glowColor = "35 85 80",
  backgroundColor = "rgba(35, 16, 11, 0.78)",
  borderRadius = 30,
  glowRadius = 35,
  glowIntensity = 1,
}) => {
  const cardRef = useRef(null);

  const handlePointerMove = useCallback((e) => {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const dx = x - cx;
    const dy = y - cy;

    const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;

    const distanceX = Math.abs(dx) / cx;
    const distanceY = Math.abs(dy) / cy;

    const edge = Math.max(distanceX, distanceY) * 100;

    card.style.setProperty("--cursor-angle", `${angle}deg`);
    card.style.setProperty("--edge-proximity", edge.toFixed(2));
  }, []);

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      className={`border-glow-card ${className}`}
      style={{
        "--card-bg": backgroundColor,
        "--edge-sensitivity": edgeSensitivity,
        "--border-radius": `${borderRadius}px`,
        "--glow-padding": `${glowRadius}px`,
        ...buildGlowVars(glowColor, glowIntensity),
      }}
    >
      <span className="edge-light" />
      <div className="border-glow-inner">{children}</div>
    </div>
  );
};

export default BorderGlow;