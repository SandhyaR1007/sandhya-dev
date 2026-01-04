"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import Socials from "./Socials";

type HeaderProps = {
  currentTab?: string;
  setCurrentTab?: (t: string) => void;
};

const HeaderComponent = ({ currentTab, setCurrentTab }: HeaderProps) => {
  return (
    <header className=" flex flex-col  gap-5   p-5 ">
      <div className="flex gap-5 p-5 rounded-xl items-center bg-white/10 shadow-lg shadow-black/30 glass-card">
        <section className="h-[120px] w-[120px]">
          <div className="drop-shadow-md rounded-xl w-full h-full">
            <Image
              width={100}
              height={100}
              src="https://i.pinimg.com/736x/c8/b7/76/c8b7765299404ce08ea93a5521813736.jpg"
              alt="Sandhya"
              className=" w-full h-full object-cover rounded-lg"
            />
          </div>
        </section>
        <section className=" flex flex-col gap-3 align-middle justify-center">
          <h2 className="text-3xl font-semibold">Sandhya Rajwanshi</h2>
          <h4 className="text-2xl text-yellow-200">Frontend Engineer</h4>
          {/* <p className="text-lg">
            Forging interfaces as sharp as a katana
            <span className="p-1 text-xl">🗡️</span>
          </p> */}
          <p className="text-violet-400 text-[18px]  max-w-sm">
            I Craft engaging, accessible, and dynamic user experiences.
          </p>
        </section>
        <div className="absolute bottom-0 right-0 p-2">
          <Socials />
        </div>
      </div>

      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </header>
  );
};

export default HeaderComponent;
