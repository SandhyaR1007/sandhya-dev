"use client";

import { FloatingNav } from "./shadcnUI/floating-navbar";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Experience",
      link: "/experience",
    },
    {
      name: "Projects",
      link: "/projects",
    },
  ];

  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default Navbar;
