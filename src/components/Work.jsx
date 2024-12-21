import { GoArrowDown } from "react-icons/go";
import HeroFrame from "../assets/HeroFrame.png";
import { motion } from "framer-motion";
import Projects from "./Projects";
import Tf1 from "../assets/Tf1.png";
import Footer from "./Footer";
import { GrAdd } from "react-icons/gr";

const Work = () => {
  return (
    <>
      <div className="mx-16 mt-[15rem]" id="work">
        <section className="relative mx-auto">
          <img
            src={HeroFrame}
            alt="hero-frame"
            width={1100}
            className="mt-32 left-[9%] mx-auto"
          />
          <h1 className="absolute top-[7rem] left-[22%] text-[5.8rem] font-medium leading-tight drop-shadow-[0_0px_35px_rgba(255,255,255,0.5)]">
            I craft products, <br /> Websites &{" "}
            <span className=" bg-gradient-to-b from-[#F2F2F2] to-[rgba(125,72,190,0.9)] inline-block text-transparent bg-clip-text">
              interfaces .
            </span>
          </h1>
          <div className="absolute left-[8rem] top-[35rem] w-[85rem] h-[14rem] bg-gradient-to-b from-[rgba(16,16,16,0.1)] via-[rgb(16,16,16)] to-[rgb(16,16,16)]"></div>
          <h3 className="absolute left-[54rem] top-[25rem] font-medium text-[22px]">
            Frontend Web Developer. Based in Tamil Nadu.
          </h3>
          <h3
            className="absolute left-[54rem] top-[28rem] font-medium text-[22px] text-white/50
        "
          >
            BCA student at Thiruvalluvar University.
          </h3>
          <motion.span
            className="absolute left-[49rem] top-[34rem]"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 50, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 2,
              ease: "easeOut",
              repeat: Infinity,
            }}
          >
            <GoArrowDown size={60} />
          </motion.span>
          <GrAdd
            size={25}
            className="absolute top-[19px] right-[19rem] text-gray-200/30"
          />
        </section>
        <Projects
          title="Stadia Bluetooth"
          subtitle="Google, '23 —"
          description="Giving a second life to over a million controllers."
          image={Tf1}
          topGradiant="from-[#4E9DE6]"
          bottomGradiant="to-[#417EB2]"
        />
        <Projects
          title="Test Hub Next"
          subtitle="Google, '22 —"
          description="Envisioning a future of playtesting for all developers."
          image={Tf1}
          topGradiant="from-[#8000BF]"
          bottomGradiant="to-[#9400D8]"
        />
        <Projects
          title="Spotlight"
          subtitle="Adobe x Netflix Creative Jam, '21 —"
          description=" Making entertainment more uniting."
          image={Tf1}
          topGradiant="from-[#FF002F]"
          bottomGradiant="to-[#FF0AB1]"
        />
        <Projects
          title="Corporate Cards Portal"
          subtitle="RBC, '21 —"
          description="Redesigning a core internal company service."
          image={Tf1}
          topGradiant="from-[#D2691E]"
          bottomGradiant="to-[#A44B15]"
        />
      </div>
      <Footer />
    </>
  );
};

export default Work;
