"use client";
const Navbar = () => {
  return (
    <nav className="hidden lg:flex flex-col gap-4 ">
      <a
        href="#about"
        className="flex  items-center gap-3 active:text-white text-slate-400 "
      >
        <p className="w-14 h-0.5 bg-slate-400  navItem" />
        <p className="text-[15px] font-semibold text-slate-400 tracking-[0.15rem]">
          ABOUT
        </p>
      </a>
      <a
        href="#experience"
        className="flex  items-center gap-3 active:text-white text-slate-400"
      >
        <p className="w-14 h-0.5 bg-slate-400" />
        <p className="text-[15px] font-semibold text-slate-400 tracking-[0.15rem]">
          EXPERIENCE
        </p>
      </a>

      <a
        href="#projects"
        className="flex  items-center gap-3 active:text-white text-slate-400"
      >
        <p className="w-14 h-0.5 bg-slate-400" />
        <p className="text-[15px] font-semibold  tracking-[0.15rem]">
          PROJECTS
        </p>
      </a>
    </nav>
  );
};

export default Navbar;
