import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socials } from "./utils";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Socials = () => {
  return (
    <ul className="flex gap-5 items-center">
      <li className="text-3xl text-neutral-400 hover:text-white">
        {" "}
        <a href={socials.github} target="_blank">
          <FaGithub />
        </a>
      </li>
      <li className="text-3xl text-neutral-400 hover:text-white">
        <a href={socials.linkedin} target="_blank">
          <FaLinkedin />
        </a>
      </li>
      <li className="text-3xl text-neutral-400 hover:text-white">
        <a href={socials.twitter} target="_blank">
          <FaSquareXTwitter />
        </a>
      </li>
      <li className="text-3xl text-neutral-400 hover:text-white">
        <a href={socials.twitter} target="_blank">
          <BiLogoGmail />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
