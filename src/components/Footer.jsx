import { GoArrowUpRight } from "react-icons/go";
import logoIcon from "../assets/logoIcon.png";

const Footer = () => {
  return (
    <footer className="w-full border-t-[1px] mt-[14rem] border-gray-200/10">
      <div className="relative w-[1100px]  h-[400px] mx-auto">
        <img
          src={logoIcon}
          alt="logoIcon"
          width={80}
          height={84}
          className="absolute top-[23%] left-[10%]"
        />
        <h3 className="absolute top-[65%] left-[10%] text-lg font-medium">
          &copy; 2024 Adithiyan. All Rights Reserved.
        </h3>
        <h3 className="absolute top-[73%] left-[10%] text-sm font-medium text-gray-200/40">
          Made with love and Mango Green Teas (50% sugar, less ice).
        </h3>
        <nav className="absolute top-[15%] right-[15%]">
          <div className="relative  w-[350px] h-[200px]">
            <div className="flex flex-col gap-10">
              <h3 className=" font-medium text-xs text-gray-200/40 uppercase ">
                main
              </h3>
              <a
                href="#work"
                className=" font-medium text-xl transition-all duration-300"
              >
                Work
              </a>
              <a href="#info" className=" font-medium text-xl">
                Info
              </a>
            </div>
            <div className="flex absolute top-0 right-10 flex-col gap-10">
              <h3 className=" font-medium text-xs text-gray-200/40 uppercase ">
                contact
              </h3>
              <a className="flex gap-1 items-center" href="#" target="_blank">
                LinkedIn <GoArrowUpRight size={25} />
              </a>
              <a className="flex gap-1 items-center" href="#" target="_blank">
                Resume <GoArrowUpRight size={25} />
              </a>
            </div>
            <h3 className="mt-20 text-sm font-medium text-nowrap text-gray-200/40">
              Last updated by Adithiyan on November 5, 2024, 12:34 PM IST
            </h3>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
