import React, { useEffect, useRef, useState } from "react";
import "./ScrollingTicker.css";

const ScrollingTicker = ({ items = [
  "Collage Fest Robo Race winner",
  "Robo line follower",
  "robo pick and place",
], speed = 120, direction = "right", fixed = false, gap = 32, itemGap = 64, className = "", ariaHidden = true }) => {
  const contentRef = useRef(null);
  const [duration, setDuration] = useState(20);
  // Render items as separate spans so we can control spacing between them
  const singleLine = items.map((it, idx) => (
    <span className="ticker-item" key={idx}>
      <span className="ticker-text">{it}</span>
      {idx < items.length - 1 && <span className="ticker-sep">•</span>}
    </span>
  ));

  useEffect(() => {
    const measure = () => {
      const el = contentRef.current;
      if (!el) return;
      const width = el.offsetWidth;
      const newDuration = Math.max(8, width / speed);
      setDuration(newDuration);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [items, speed]);

  const animDirection = direction === "right" ? "reverse" : "normal";
  const style = {
    ["--duration"]: `${duration}s`,
    ["--anim-direction"]: animDirection,
    ["--ticker-gap"]: `${gap}px`,
    ["--item-gap"]: `${itemGap}px`,
  };

  // If fixed, set a CSS var on :root for the height so page padding can adapt
  useEffect(() => {
    if (!fixed) return;
    const el = contentRef.current;
    const height = el ? el.offsetHeight + 8 : 48; // add small padding
    document.documentElement.style.setProperty("--ticker-height", `${height}px`);
    return () => {
      document.documentElement.style.setProperty("--ticker-height", `0px`);
    };
  }, [fixed]);

  return (
    <div className={`ticker-wrapper ${fixed ? 'ticker-fixed' : ''} ${className}`} aria-hidden={ariaHidden}>
      <div className="ticker" style={style}>
        <div className="ticker-content" ref={contentRef}>
          {singleLine}
        </div>
        <div className="ticker-content">
          {singleLine}
        </div>
      </div>
    </div>
  );
};

export default ScrollingTicker;
