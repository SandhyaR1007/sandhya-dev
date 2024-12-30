import Socials from "./Socials";
import ThreeDCard from "./ui/ThreeDCard";

const HeaderComponent = () => {
  return (
    <div className="flex gap-5 items-center justify-around">
      <header className=" flex flex-col gap-20  py-10 md:px-40    ">
        <section className="flex flex-col gap-3 ">
          <p className="text-xl">Hi I am, </p>
          <h2 className="text-7xl font-semibold ">
            <span>Sandhya</span>
            <br />
            <span>Rajwanshi</span>
          </h2>
          <h4 className="text-3xl text-yellow-200">Frontend Engineer</h4>
          <p className="text-lg">
            Forging interfaces as sharp as a katana
            <span className="p-1 text-xl">🗡️</span>
          </p>
          <p className="text-slate-400 text-[18px]  max-w-sm">
            I Craft engaging, accessible, and dynamic user experiences.
          </p>
        </section>

        <Socials />
      </header>

      <ThreeDCard />
    </div>
  );
};

export default HeaderComponent;
