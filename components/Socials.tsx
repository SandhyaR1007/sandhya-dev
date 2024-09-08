import { FaGithub, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";
import { socials } from "./utils";

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
          <FaTwitter />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
