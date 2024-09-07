"use client";
import React, { useState, useEffect } from "react";

function GlowEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: any) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  {
    /* <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span> */
  }
  return (
    <div>
      <div
        style={{
          position: "absolute",
          left: position.x,
          top: position.y,
          width: "500px",
          height: "500px",
          //   backgroundColor: "rgba(0, 38, 255, 0.1)",
          borderRadius: "50%",
          background:
            "radial-gradient(300px, rgba(255,241,38, 0.05), transparent 90%), radial-gradient(350px, rgba(255,255,255, 0.01), transparent 90%)",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
        }}
      />
      {/* Rest of your app */}
    </div>
  );
}

export default GlowEffect;
