import { useState } from "react";
import logoIcon from "../assets/logoIcon.png";
import { GoArrowUpRight } from "react-icons/go";
import Work from "./Work.jsx";
import Info from "./Info.jsx";

const NavBar = () => {
  const [isToggle, setIsToggle] = useState("work");

  return (
    <>
      <section className="fixed top-0 z-50">
        <div className="flex">
          <nav className="w-[102rem] flex items-center justify-between mt-12 mx-16 ">
            <section className="flex gap-4">
              <img src={logoIcon} alt="logoIcon" width={48} height={54} />
              <div className="flex flex-col">
                <h3 className="text-xl leading-7 mt-2 font-medium">
                  Adithiyan
                </h3>
                <h6 className="text-sm text-gray-200/50">Frontend Developer</h6>
              </div>
            </section>
            <section className="ml-[5rem] w-[200px] h-[60px] relative flex justify-center items-center bg-gray-200/5 backdrop-blur-3xl rounded-full border border-gray-200/15 ">
              <div className="flex relative items-center  w-[178px] h-[45px] bg-gray-200/5 rounded-full">
                <div
                  className={`absolute z-10 w-[90px] h-[40px] bg-gray-200/25 rounded-full transition-transform duration-300 ease-in-out  ${
                    isToggle === "work" ? "translate-x-0" : "translate-x-[88px]"
                  }`}
                ></div>
                <button
                  onClick={() => setIsToggle("work")}
                  className="text-base absolute left-0 px-6 py-2 rounded-full bg-transparent transition-all duration-150 hover:bg-gray-200/5"
                >
                  Work
                </button>
                <button
                  onClick={() => setIsToggle("info")}
                  className="text-base absolute right-1 px-7 py-2 rounded-full bg-transparent transition-all duration-150 ease-in-out hover:bg-gray-200/5"
                >
                  Info
                </button>
              </div>
            </section>
            <section className="flex gap-10 ">
              <a
                className="flex gap-1 items-center px-3 py-2 bg-transparent rounded-full transition-all duration-150 ease-in-out hover:bg-gray-200/5"
                href="#"
                target="_blank"
              >
                LinkedIn <GoArrowUpRight size={25} />
              </a>
              <a
                className="flex gap-1 items-center px-3 py-2 bg-transparent rounded-full transition-all duration-150 ease-in-out hover:bg-gray-200/5"
                href="#"
                target="_blank"
              >
                Resume <GoArrowUpRight size={25} />
              </a>
            </section>
          </nav>
        </div>
      </section>
      {isToggle === "work" ? <Work /> : <Info />}
    </>
  );
};

export default NavBar;
