import React, { useState, useEffect, useRef } from "react";

export const ParallaxSection = ({ children, index, isLast }) => {
  const containerRef = useRef(null);
  const [stickyTop, setStickyTop] = useState(0);

  useEffect(() => {
    const updateStickyTop = () => {
      if (containerRef.current) {
        const height = containerRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        if (height > viewportHeight) {
          // Calculate negative top offset so section content scrolls completely before sticking
          setStickyTop(viewportHeight - height);
        } else {
          setStickyTop(0);
        }
      }
    };

    updateStickyTop();

    const resizeObserver = new ResizeObserver(() => {
      updateStickyTop();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener("resize", updateStickyTop);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateStickyTop);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full bg-bg-base ${
        index === 0
          ? ""
          : "border-t border-white/10 shadow-[0_-25px_60px_rgba(0,0,0,0.95)] rounded-t-[32px] sm:rounded-t-[44px]"
      } transform-gpu will-change-transform ${
        isLast ? "" : "sticky pb-12 sm:pb-24"
      }`}
      style={{
        top: isLast ? "auto" : `${stickyTop}px`,
        zIndex: index + 1,
      }}
    >
      {children}
    </div>
  );
};
