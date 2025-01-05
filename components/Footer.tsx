import Socials from "./Socials";

const Footer = () => {
  return (
    <div className="pt-10 ">
      <div className="h-0.5 w-full bg-amber-100 mb-2 opacity-15"></div>
      <div className="flex justify-between items-center pt-2 ">
        <Socials />
        <p className="text-neutral-400 ">
          Made with 💛 by <span className="text-white">Sandhya</span>.
        </p>
      </div>
    </div>
  );
};

export default Footer;
