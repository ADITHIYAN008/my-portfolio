import { GoArrowRight } from "react-icons/go";
import { useState } from "react";

const Projects = ({
  title,
  subtitle,
  description,
  image,
  topGradiant,
  bottomGradiant,
}) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <section className="mt-[8rem] mx-auto ">
      <div className="relative w-[1100px] h-[750px] bg-gray-200/5 mx-auto rounded-3xl border border-gray-200/15 ">
        <div
          className={`absolute top-2 left-2 w-[1080px] h-[730px] bg-transparent rounded-2xl border border-gray-200/30 overflow-hidden ${
            onHover ? "border-gray-200/65" : ""
          }
          `}
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
        >
          <img
            src={image}
            alt="Tf1"
            width={900}
            className={`absolute -bottom-20 left-[6rem] z-10 transition-all duration-300 ease-out ${
              onHover ? "-translate-y-10" : ""
            }`}
          />
          <h3 className="absolute left-14 top-10 text-4xl font-medium z-10">
            {title}
          </h3>
          <h3 className="absolute left-14 top-24 text-lg font-medium z-10">
            {subtitle} <span className="text-gray-200/50">{description}</span>
          </h3>
          <GoArrowRight
            size={35}
            className={`absolute right-16 top-12 z-10 transition-all duration-300 delay-200 ease-out ${
              onHover ? "translate-x-5" : ""
            }`}
          />
          <div
            className={`absolute -top-[40rem] left-[4rem] w-[70rem] h-[70rem] rounded-full bg-gradient-to-r ${topGradiant} ${bottomGradiant} blur-[15rem] opacity-0 transition-all duration-300 ease-in-out  ${
              onHover ? "opacity-100" : ""
            } `}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
