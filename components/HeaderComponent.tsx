import Navbar from "./Navbar";
import Socials from "./Socials";

const HeaderComponent = () => {
  return (
    <header className=" flex flex-col gap-20 lg:w-[50%] lg:fixed lg:left-[150px] p-5">
      <section className="flex flex-col gap-3 ">
        <h2 className="text-5xl font-semibold">Sandhya Rajwanshi</h2>
        <h4 className="text-2xl text-yellow-200">Frontend Engineer</h4>
        <p className="text-slate-400 text-[18px]  max-w-sm">
          I build pixel-perfect, engaging, and accessible digital experiences.{" "}
        </p>
      </section>
      <Navbar />

      <Socials />
    </header>
  );
};

export default HeaderComponent;
