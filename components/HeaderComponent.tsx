import Socials from "./Socials";

const HeaderComponent = () => {
  return (
    <header className=" flex flex-col gap-20 w-[50%] fixed left-[200px] p-5">
      <section className="flex flex-col gap-3 ">
        <h2 className="text-5xl font-semibold">Sandhya Rajwanshi</h2>
        <h4 className="text-2xl text-yellow-200">Frontend Engineer</h4>
        <p className="text-slate-400 text-[18px]  max-w-sm">
          I build pixel-perfect, engaging, and accessible digital experiences.{" "}
        </p>
      </section>
      <nav>
        <a
          href="#about"
          className="flex  items-center gap-3 active:text-white text-slate-400"
        >
          <p className="w-14 h-0.5 bg-slate-400 " />
          <p className="text-[16px] font-semibold text-slate-400">ABOUT</p>
        </a>
        <a
          href="#experience"
          className="flex  items-center gap-3 active:text-white text-slate-400"
        >
          <p className="w-14 h-0.5 bg-slate-400" />
          <p className="text-[16px] font-semibold text-slate-400">EXPERIENCE</p>
        </a>
        <a
          href="#technology"
          className="flex  items-center gap-3 active:text-white text-slate-400"
        >
          <p className="w-14 h-0.5 bg-slate-400" />
          <p className="text-[16px] font-semibold ">TECHNOLOGY</p>
        </a>
        <a
          href="#projects"
          className="flex  items-center gap-3 active:text-white text-slate-400"
        >
          <p className="w-14 h-0.5 bg-slate-400" />
          <p className="text-[16px] font-semibold ">PROJECTS</p>
        </a>
      </nav>
      <section>
        <Socials />
      </section>
    </header>
  );
};

export default HeaderComponent;
