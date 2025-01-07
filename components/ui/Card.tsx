import { MdArrowOutward } from "react-icons/md";
import { socials } from "../utils";

export const Card = (props: any) => {
  const { title, description, skills, link = "" } = props;
  return (
    <a
      className="flex p-5 rounded-md hover:bg-[rgba(253,224,71,0.05)]   transition-[0.5s] exp-card hover:shadow-md"
      href={link || socials.linkedin}
      target="_blank"
    >
      {props.exp ? (
        <div className="hidden md:block text-neutral-400 text-sm  w-1/4">
          {props.exp}
        </div>
      ) : (
        <div className="hidden md:block w-1/4 px-3 py-1">
          <img className="w-36 h-24 rounded-md" src={props.image} alt={title} />
        </div>
      )}
      <div className="md:w-3/4 flex flex-col gap-3">
        <h2 className="text-white text-lg flex items-center gap-1">
          <span>{title}</span>{" "}
          <span>
            <MdArrowOutward className="arrow-upward" />
          </span>
        </h2>
        {props.exp && (
          <div className="md:hidden text-neutral-400 text-sm ">{props.exp}</div>
        )}

        {Array.isArray(description) ? (
          <ul className=" list-disc">
            {description.map((desc: string) => (
              <li key={desc} className="text-neutral-400">
                {desc}
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-neutral-400">{description}</div>
        )}
        <ul className="flex items-center gap-3 flex-wrap">
          {skills.map((skill: string, index: number) => (
            <li
              key={`${index}-${skill}`}
              className="text-yellow-300 bg-[rgba(255,241,38,0.2)] px-4 py-1.5 rounded-full text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
};
