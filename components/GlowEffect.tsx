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
            "radial-gradient(1058px, rgba(29, 78, 216, 0.15), transparent 80%)",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
        }}
      />
      {/* Rest of your app */}
    </div>
  );
}

export default GlowEffect;
