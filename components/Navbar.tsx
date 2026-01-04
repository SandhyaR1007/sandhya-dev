"use client";
import React from "react";

type NavbarProps = {
  currentTab?: string;
  setCurrentTab?: (t: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({
  currentTab = "about",
  setCurrentTab,
}) => {
  const items = [
    { key: "about", label: "ABOUT" },
    { key: "experience", label: "EXPERIENCE" },
    { key: "projects", label: "PROJECTS" },
  ];

  return (
    <nav className="flex gap-3 flex-wrap">
      {items.map((item) => {
        const active = currentTab === item.key;
        return (
          <button
            key={item.key}
            onClick={() => setCurrentTab && setCurrentTab(item.key)}
            className={
              "px-4 py-2 rounded-full text-sm font-semibold transition-colors " +
              (active
                ? "bg-yellow-400/10 text-yellow-300 border border-yellow-300/20"
                : "text-slate-300/80 glass hover:text-white")
            }
          >
            {item.label}
          </button>
        );
      })}
    </nav>
  );
};

export default Navbar;
