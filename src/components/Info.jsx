import React, { useEffect, useState } from "react";
import InfoFrame from "./InfoFrame";
import HTML from "../assets/html-icon.png";
import CSS from "../assets/CSS.png";
import Figma from "../assets/Figma.png";
import Bootstrap from "../assets/Bootstrap.png";
import Firebase from "../assets/Firebase.png";
import Git from "../assets/Git.png";
import Java from "../assets/Java.png";
import Javascript from "../assets/Javascript.png";
import Mongo from "../assets/Mongo.png";
import Next from "../assets/Next.png";
import Node from "../assets/Node.png";
import Postman from "../assets/Postman.png";
import ReactIcon from "../assets/React.png";
import Saas from "../assets/Saas.png";
import Tailwindcss from "../assets/Tailwindcss.png";
import Typescript from "../assets/Typescript.png";
import Vite from "../assets/Vite.png";

import IP1 from "../assets/IP1.png";
import IP2 from "../assets/IP2.png";
import IP3 from "../assets/IP3.png";
import IP4 from "../assets/IP4.png";
import IP5 from "../assets/IP5.png";
import IP6 from "../assets/IP6.png";
import IBM_COURSERA from "../assets/IBM_COURSERA.png";
import IBM_WEB from "../assets/IBM_WEB.png";
import sign from "../assets/Sign.png";
import Experience from "./Experience";
import Footer from "./Footer.jsx";
import Loading from "./Loading.jsx";
import { motion } from "framer-motion";

const Info = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <section
            className="max-w-[1100px] mx-10 lg:ml-6 xl:mx-auto mt-[10rem] "
            id="info"
          >
            <motion.div
              className="flex gap-7 relative w-3 h-3 mb-7 rounded-full bg-white items-center "
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <div className="absolute w-4 h-4 rounded-full bg-white blur-[0.7rem]"></div>
              <h3 className="font-medium ml-7 text-nowrap text-[11px] text-gray-200/50  uppercase ">
                About Me
              </h3>
            </motion.div>
            <motion.h1
              className="text-[7.5vw] lg:text-[55px] text-left sm:text-[7vw] md:text-[42px]  font-medium leading-tight drop-shadow-[0_0px_35px_rgba(255,255,255,0.5)]"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              I'm passionate about creating beautiful products that{" "}
              <span className=" bg-gradient-to-b from-[#F2F2F2] to-[rgba(125,72,190,0.9)] inline-block text-transparent bg-clip-text">
                empower people.
              </span>
            </motion.h1>
            <div>
              <div className="flex flex-col mt-[3rem] gap-12 md:flex-row ">
                <motion.div
                  className="flex flex-col gap-12 items-center"
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                >
                  <InfoFrame img={IP1} title="first-image" />
                  <h1 className="text-[18px] px-5 font-medium text-center text-white/85 md:hidden">
                    This is my story — a peek into my life, my roots, and the
                    journey I'm building in tech.
                  </h1>
                  <div className="hidden md:block text-left w-[80%]">
                    <div className="flex flex-col gap-9 mt-3 text-left ">
                      <h1 className=" font-medium text-xl text-white/85 ">
                        Where it all began.
                      </h1>
                      <p className=" font-medium text-base text-gray-200/50">
                        I was born and raised in Tiruvannamalai, Tamil Nadu — a
                        small, peaceful town known for its rich spiritual
                        heritage and the majestic Arunachala Hill. It’s a place
                        where tradition meets tranquility.
                      </p>
                      <p className=" font-medium text-base text-gray-200/50">
                        What I love the most about my hometown is how grounded
                        it keeps me — the calm vibes, the culture, and the
                        rhythm of everyday life here inspire me to think deeply
                        and dream big.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="flex flex-col"
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex flex-col md:mt-12 md:w-[80%] items-center">
                    <h1 className="text-[18px] hidden text-center font-medium mb-10 text-white/85 md:block">
                      This is my story — a peek into my life, my roots, and the
                      journey I'm building in tech.
                    </h1>
                    <InfoFrame img={IP2} title="second-image" />
                    <div className=" flex flex-col gap-9 mt-16 text-left md:hidden ">
                      <h1 className=" font-medium text-xl text-white/85 ">
                        Where it all began.
                      </h1>
                      <p className=" font-medium text-base text-gray-200/50">
                        I was born and raised in Tiruvannamalai, Tamil Nadu — a
                        small, peaceful town known for its rich spiritual
                        heritage and the majestic Arunachala Hill. It’s a place
                        where tradition meets tranquility.
                      </p>
                      <p className=" font-medium text-base text-gray-200/50">
                        What I love the most about my hometown is how grounded
                        it keeps me — the calm vibes, the culture, and the
                        rhythm of everyday life here inspire me to think deeply
                        and dream big.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div>
              <div className="flex flex-col mt-[3rem] gap-12 md:flex-row ">
                <motion.div
                  className="flex flex-col gap-12 items-center"
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                >
                  <InfoFrame img={IP3} title="first-image" />
                  <div className="hidden md:block text-left w-[99%] md:w-[80%]">
                    <div className="flex flex-col gap-9 mt-3 text-left ">
                      <h1 className=" font-medium text-xl text-white/85 ">
                        The bigger picture.
                      </h1>
                      <p className=" font-medium text-base text-gray-200/50">
                        But I didn’t stop there. I wanted to create things that
                        had a real impact. That’s when I started diving into
                        cloud computing, real-time systems, and even began
                        learning Python and AI concepts. I’ve been shaping my
                        skills toward a future where I can build smart,
                        intuitive systems — maybe even launch my own AI company
                        someday.
                      </p>
                      <p className=" font-medium text-base text-gray-200/50">
                        And yes, my dream startup? It’s all about creating
                        personalized AI tools that help people manage life more
                        easily — from everyday tasks to smart home systems.
                      </p>
                    </div>
                  </div>
                  <div className=" md:hidden text-left w-[99%]">
                    <div className="flex flex-col gap-9 mt-3 text-left ">
                      <h1 className=" font-medium text-xl text-white/85 ">
                        The start of something new.
                      </h1>
                      <p className=" font-medium text-base text-gray-200/50">
                        Back in college, I found myself drawn toward web
                        development. What began as simple curiosity turned into
                        a full-on passion. I started learning HTML, CSS, and
                        JavaScript, building small projects on my own. Over
                        time, I took it up a notch — learning React.js,
                        TypeScript, and exploring design systems like Framer
                        Motion and ShadcnUI.
                      </p>
                      <p className=" font-medium text-base text-gray-200/50">
                        I realized I loved making digital experiences that not
                        only looked good but felt good — interactive, smooth,
                        and human.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="flex flex-col"
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex flex-col md:w-[80%] items-center">
                    <div className="hidden md:block md:w-[95%] md:mb-10">
                      <div className=" flex flex-col gap-9 mt-16 text-left">
                        <h1 className=" font-medium text-xl text-white/85 ">
                          The start of something new.
                        </h1>
                        <p className=" font-medium text-base text-gray-200/50">
                          Back in college, I found myself drawn toward web
                          development. What began as simple curiosity turned
                          into a full-on passion. I started learning HTML, CSS,
                          and JavaScript, building small projects on my own.
                          Over time, I took it up a notch — learning React.js,
                          TypeScript, and exploring design systems like Framer
                          Motion and ShadcnUI.
                        </p>
                        <p className=" font-medium text-base text-gray-200/50">
                          I realized I loved making digital experiences that not
                          only looked good but felt good — interactive, smooth,
                          and human.
                        </p>
                      </div>
                    </div>

                    <InfoFrame img={IP4} title="second-image" />
                    <div className=" flex flex-col gap-9 mt-16 text-left md:hidden ">
                      <h1 className=" font-medium text-xl text-white/85 ">
                        The bigger picture.
                      </h1>
                      <p className=" font-medium text-base text-gray-200/50">
                        But I didn’t stop there. I wanted to create things that
                        had a real impact. That’s when I started diving into
                        cloud computing, real-time systems, and even began
                        learning Python and AI concepts. I’ve been shaping my
                        skills toward a future where I can build smart,
                        intuitive systems — maybe even launch my own AI company
                        someday.
                      </p>
                      <p className=" font-medium text-base text-gray-200/50">
                        And yes, my dream startup? It’s all about creating
                        personalized AI tools that help people manage life more
                        easily — from everyday tasks to smart home systems.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div>
              <div className="flex flex-col mt-[3rem] gap-12 md:flex-row ">
                <motion.div
                  className="flex flex-col gap-12 items-center"
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                >
                  <InfoFrame img={IP5} title="first-image" />
                  <div className="hidden md:block text-left w-[99%] md:w-[80%]">
                    <div className="flex flex-col gap-9 mt-3 text-left ">
                      <h1 className=" font-medium text-xl text-white/85 ">
                        Just me, outside the screen
                      </h1>
                      <p className=" font-medium text-base text-gray-200/50">
                        When I’m not coding or tweaking my portfolio, I’m
                        probably on Discord, chatting with fellow learners. I
                        love music — especially Justin Bieber, Ed Sheeran, and
                        Joel Adams. I enjoy gaming, working out, and dreaming
                        about where tech can take us.
                      </p>
                      <p className=" font-medium text-base text-gray-200/50">
                        Living in a small town, I’ve learned to think big — and
                        I believe that even from the quietest corners of the
                        world, you can build something that reaches millions.
                      </p>
                      <div className="flex flex-col gap-3">
                        <h1 className=" font-medium text-xl text-white/85 ">
                          Thanks for stopping by!
                        </h1>
                        <img
                          src={sign}
                          alt="signature"
                          width={150}
                          height={150}
                          className="opacity-50 mt-4 ml-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" md:hidden text-left w-[99%]">
                    <div className="flex flex-col gap-9 mt-3 text-left ">
                      <h1 className=" font-medium text-xl text-white/85 ">
                        Connecting the dots.
                      </h1>
                      <p className=" font-medium text-base text-gray-200/50">
                        What helped me grow was doing everything step by step —
                        watching YouTube tutorials, reading blogs, building
                        real-world projects, and joining tech communities
                        online.
                      </p>
                      <p className=" font-medium text-base text-gray-200/50">
                        I even worked on a freelancer-style platform project to
                        challenge myself with real product thinking and frontend
                        design.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="flex flex-col"
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex flex-col md:w-[80%] items-center">
                    <div className="hidden md:block md:w-[95%] md:mb-10">
                      <div className=" flex flex-col gap-9 mt-16 text-left">
                        <h1 className=" font-medium text-xl text-white/85 ">
                          Connecting the dots.
                        </h1>
                        <p className=" font-medium text-base text-gray-200/50">
                          What helped me grow was doing everything step by step
                          — watching YouTube tutorials, reading blogs, building
                          real-world projects, and joining tech communities
                          online.
                        </p>
                        <p className=" font-medium text-base text-gray-200/50">
                          I even worked on a freelancer-style platform project
                          to challenge myself with real product thinking and
                          frontend design.
                        </p>
                      </div>
                    </div>

                    <InfoFrame img={IP6} title="second-image" />
                    <div className=" flex flex-col gap-9 mt-16 text-left md:hidden ">
                      <h1 className=" font-medium text-xl text-white/85 ">
                        Just me, outside the screen
                      </h1>
                      <p className=" font-medium text-base text-gray-200/50">
                        When I’m not coding or tweaking my portfolio, I’m
                        probably on Discord, chatting with fellow learners. I
                        love music — especially Justin Bieber, Ed Sheeran, and
                        Joel Adams. I enjoy gaming, working out, and dreaming
                        about where tech can take us.
                      </p>
                      <p className=" font-medium text-base text-gray-200/50">
                        Living in a small town, I’ve learned to think big — and
                        I believe that even from the quietest corners of the
                        world, you can build something that reaches millions.
                      </p>
                      <div className="flex flex-col gap-3">
                        <h1 className=" font-medium text-xl text-white/85 ">
                          Thanks for stopping by!
                        </h1>
                        <img
                          src={sign}
                          alt="signature"
                          width={150}
                          height={150}
                          className="opacity-50 mt-4 ml-2"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="border-t-[1px] border-gray-200/20 mt-24"></div>
            <section className=" mt-10 md:mt-16">
              <div className="flex gap-7 relative w-3 h-3 mb-10 md:mb-0 rounded-full bg-white items-center">
                <div className="absolute w-4 h-4 rounded-full bg-white blur-[0.7rem]"></div>
                <h3 className="font-medium ml-8 uppercase text-nowrap text-xs text-gray-200/40 ">
                  Skills
                </h3>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-10   sm:ml-20 mt-10">
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="bg-white w-20 h-24 rounded-xl flex flex-col justify-center items-center text-black text-center xl:w-40 xl:bg-transparent xl:border xl:h-40 xl:text-white xl:border-white/30"
                >
                  <img className="w-10 h-10 " src={HTML} alt="" />
                  <h2 className="font-medium text-black sm:text-white/50 xl:text-base text-xs mt-3 ">
                    HTML
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="bg-white w-20 h-24 rounded-xl flex flex-col justify-center items-center text-black text-center xl:w-40 xl:bg-transparent xl:border xl:h-40 xl:text-white xl:border-white/30"
                >
                  <img className="w-10 h-10" src={CSS} alt="" />
                  <h2 className="font-medium text-black sm:text-white/50 xl:text-base text-xs mt-3 ">
                    CSS
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="bg-white w-20 h-24 rounded-xl flex flex-col justify-center items-center text-black text-center xl:w-40 xl:bg-transparent xl:border xl:h-40 xl:text-white xl:border-white/30"
                >
                  <img className="w-10 h-10" src={Saas} alt="" />
                  <h2 className="font-medium text-black sm:text-white/50 xl:text-base text-xs mt-3 ">
                    Sass
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="bg-white w-20 h-24 rounded-xl flex flex-col justify-center items-center text-black text-center xl:w-40 xl:bg-transparent xl:border xl:h-40 xl:text-white xl:border-white/30"
                >
                  <img className="w-10 h-8 " src={Bootstrap} alt="" />
                  <h2 className="font-medium text-black sm:text-white/50 xl:text-base text-xs mt-3 ">
                    Bootstrap
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="bg-white w-20 h-24 rounded-xl flex flex-col justify-center items-center text-black text-center xl:w-40 xl:bg-transparent xl:border xl:h-40 xl:text-white xl:border-white/30"
                >
                  <img className="w-10 h-8 " src={Tailwindcss} alt="" />
                  <h2 className="font-medium text-black sm:text-white/50 xl:text-base text-xs mt-3 ">
                    Tailwindcss
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="bg-white w-20 h-24 rounded-xl flex flex-col justify-center items-center text-black text-center xl:w-40 xl:bg-transparent xl:border xl:h-40 xl:text-white xl:border-white/30"
                >
                  <img className="w-10 h-10" src={Javascript} alt="" />
                  <h2 className="font-medium text-black sm:text-white/50 xl:text-base text-xs mt-3 ">
                    Javascript
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="bg-white w-20 h-24 rounded-xl flex flex-col justify-center items-center text-black text-center xl:w-40 xl:bg-transparent xl:border xl:h-40 xl:text-white xl:border-white/30"
                >
                  <img className="w-10 h-10" src={Typescript} alt="" />
                  <h2 className="font-medium text-black sm:text-white/50 xl:text-base text-xs mt-3 ">
                    Typescript
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="bg-white w-20 h-24 rounded-xl flex flex-col justify-center items-center text-black text-center xl:w-40 xl:bg-transparent xl:border xl:h-40 xl:text-white xl:border-white/30"
                >
                  <img className="w-10 h-10" src={Vite} alt="" />
                  <h2 className="font-medium text-black sm:text-white/50 xl:text-base text-xs mt-3 ">
                    Vite
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="bg-white w-20 h-24 rounded-xl flex flex-col justify-center items-center text-black text-center xl:w-40 xl:bg-transparent xl:border xl:h-40 xl:text-white xl:border-white/30"
                >
                  <img className="w-10 h-10" src={ReactIcon} alt="" />
                  <h2 className="font-medium text-black sm:text-white/50 xl:text-base text-xs mt-3 ">
                    React
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="bg-white w-20 h-24 rounded-xl flex flex-col justify-center items-center text-black text-center xl:w-40 xl:bg-transparent xl:border xl:h-40 xl:text-white xl:border-white/30"
                >
                  <img className="w-10 h-10" src={Node} alt="" />
                  <h2 className="font-medium text-black sm:text-white/50 xl:text-base text-xs mt-3 ">
                    NodeJs
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="bg-white w-20 h-24 rounded-xl flex flex-col justify-center items-center text-black text-center xl:w-40 xl:bg-transparent xl:border xl:h-40 xl:text-white xl:border-white/30"
                >
                  <img className="w-10 h-12" src={Mongo} alt="" />
                  <h2 className="font-medium text-black sm:text-white/50 xl:text-base text-xs mt-3 ">
                    MongoDB
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="bg-white w-20 h-24 rounded-xl flex flex-col justify-center items-center text-black text-center xl:w-40 xl:bg-transparent xl:border xl:h-40 xl:text-white xl:border-white/30"
                >
                  <img className="w-10 h-10" src={Git} alt="" />
                  <h2 className="font-medium text-black sm:text-white/50 xl:text-base text-xs mt-3 ">
                    Git
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="bg-white w-20 h-24 rounded-xl flex flex-col justify-center items-center text-black text-center xl:w-40 xl:bg-transparent xl:border xl:h-40 xl:text-white xl:border-white/30"
                >
                  <img className="w-10 h-10" src={Firebase} alt="" />
                  <h2 className="font-medium text-black sm:text-white/50 xl:text-base text-xs mt-3 ">
                    Firebase
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="bg-white w-20 h-24 rounded-xl flex flex-col justify-center items-center text-black text-center xl:w-40 xl:bg-transparent xl:border xl:h-40 xl:text-white xl:border-white/30"
                >
                  <img className="w-7 h-10" src={Figma} alt="" />
                  <h2 className="font-medium text-black sm:text-white/50 xl:text-base text-xs mt-3 ">
                    Figma
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="bg-white w-20 h-24 rounded-xl flex flex-col justify-center items-center text-black text-center xl:w-40 xl:bg-transparent xl:border xl:h-40 xl:text-white xl:border-white/30"
                >
                  <img className="w-10 h-10" src={Postman} alt="" />
                  <h2 className="font-medium text-black sm:text-white/50 xl:text-base text-xs mt-3 ">
                    Postman
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="bg-white w-20 h-24 rounded-xl flex flex-col justify-center items-center text-black text-center xl:w-40 xl:bg-transparent xl:border xl:h-40 xl:text-white xl:border-white/30"
                >
                  <img
                    className="w-13 h-10 xl:bg-white xl:px-2"
                    src={Next}
                    alt=""
                  />
                  <h2 className="font-medium text-black sm:text-white/50 xl:text-base text-xs mt-3 ">
                    NextJs
                  </h2>
                </motion.div>
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="bg-white w-20 h-24 rounded-xl flex flex-col justify-center items-center text-black text-center xl:w-40 xl:bg-transparent xl:border xl:h-40 xl:text-white xl:border-white/30"
                >
                  <img className="w-10 h-10" src={Java} alt="" />
                  <h2 className="font-medium text-black sm:text-white/50 xl:text-base text-xs mt-3 ">
                    Java
                  </h2>
                </motion.div>
              </div>
            </section>{" "}
            <div className="border-t-[1px] border-gray-200/20 mt-24"></div>
            <section className=" mt-10 md:mt-16">
              <div className="flex gap-7 relative w-3 h-3 mb-10 md:mb-0 rounded-full bg-white items-center">
                <div className="absolute w-4 h-4 rounded-full bg-white blur-[0.7rem]"></div>
                <h3 className="font-medium ml-8 uppercase text-nowrap text-xs text-gray-200/40 ">
                  experience
                </h3>
              </div>
              <Experience
                company="Dabotics India"
                title="Frontend Developer, Intern"
                year="06/'24 - 07/'24"
                description="Gained hands-on experience in JavaScript and React for dynamic front-end functionality, Integrated RESTful APIs and optimized UI performance with Framer Motion animations."
              />
              {/* <Experience
                company="Google"
                title="Interaction Designer, Stadia"
                year="06/'22 - 04/'23"
                description="I owned a product that was part of Stadia's developer suite, and led design on the website for enabling Bluetooth on Stadia Controllers post-sunset."
              />
              <Experience
                company="RBC"
                title="UX Design Intern, Innovation"
                year="Summer '21"
                description="I championed the redesign of the bank’s internal corporate cards portal, and designed a patented wealth management network visualizer."
              /> */}
            </section>{" "}
            <div className="border-t-[1px] border-gray-200/20 mt-24"></div>
            <section className=" mt-10 md:mt-16">
              <div className="flex gap-7 relative w-3 h-3 mb-10 md:mb-0 rounded-full bg-white items-center ">
                <div className="absolute w-4 h-4 rounded-full bg-white blur-[0.7rem]"></div>
                <h3 className="font-medium ml-8 uppercase text-nowrap text-xs text-gray-200/40 ">
                  CERTIFICATIONS
                </h3>
              </div>
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="flex flex-col items-center md:flex-row mt-16 justify-between w-full"
              >
                <div>
                  <a
                    href="https://www.coursera.org/account/accomplishments/specialization/certificate/EWEAMYUAYJ6P"
                    className="font-medium text-[18px]  text-nowrap md:text-2xl mb-2"
                  >
                    IBM Front-End Developer Specialization
                  </a>
                  <h3 className="md:w-[27rem] font-medium text-[15px] md:text-lg text-gray-200/50">
                    Coursera
                  </h3>
                  <p className="md:w-[27rem] font-medium text-[15px] md:text-base text-gray-200/50">
                    Issued Nov 2023
                  </p>
                  <p className="md:w-[27rem] font-medium text-[15px] md:text-base text-gray-200/50">
                    Credential ID EWEAMYUAYJ6P
                  </p>
                </div>
                <a
                  className="mt-10"
                  href="https://www.coursera.org/account/accomplishments/specialization/certificate/EWEAMYUAYJ6P"
                >
                  <img
                    src={IBM_COURSERA}
                    className="max-w-[400px] w-[250px] hover:scale-110 duration-500 ease-in-out rounded-lg"
                    alt=""
                  />
                </a>
              </motion.div>
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="flex flex-col items-center md:flex-row mt-16 justify-between w-full"
              >
                <div>
                  <a
                    href="https://www.credly.com/badges/515089d5-41ce-4090-b28c-ca3864dc1165/linked_in_profile"
                    className="font-medium text-[18px]  text-nowrap md:text-2xl mb-2"
                  >
                    Web Development
                  </a>
                  <h3 className="md:w-[27rem] font-medium text-[15px] md:text-lg text-gray-200/50">
                    IBM
                  </h3>
                  <p className="md:w-[27rem] font-medium text-[15px] md:text-base text-gray-200/50">
                    Issued Aug 2023
                  </p>
                </div>
                <a
                  className="mt-10"
                  href="https://www.credly.com/badges/515089d5-41ce-4090-b28c-ca3864dc1165/linked_in_profile"
                >
                  <img
                    src={IBM_WEB}
                    className="max-w-[400px] w-[250px] hover:scale-110 duration-500 ease-in-out rounded-lg"
                    alt=""
                  />
                </a>
              </motion.div>
            </section>{" "}
          </section>

          <Footer />
        </div>
      )}
    </>
  );
};

export default Info;
