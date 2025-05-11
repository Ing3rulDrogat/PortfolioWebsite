"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { TbBrandThreejs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { SiN8N } from "react-icons/si";

import { FaAws } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoElectron } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { GiArtificialIntelligence } from "react-icons/gi";

import { Roboto } from "next/font/google";
const Robot = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  preload: true,
});

function Skills() {
  const hasPlayedScrollAnimation = useRef<Set<Element>>(new Set());
  const technologiesIKnowSelected = useRef<boolean>(true);

  const [technologiesIKnow, settechnologiesIKnow] = useState(true);
  var learningRoadmapElements: Element[] = new Array();
  var technologiesIKnowElements: Element[] = new Array();

  const buttonLearningRoadmap = () => {
    const elements = document.querySelectorAll(".technologiesIKnow");
    var timeDelay: number = 0;

    if (technologiesIKnowSelected.current === true) {
      technologiesIKnowSelected.current = false;
      elements.forEach((e, index, array) => {
        const htmlElement = e as HTMLElement;
        e.classList.replace("animate-skillsAppearing", "animate-skillsDisappearing");
        htmlElement.style.animationDelay = `${timeDelay}ms`;
        timeDelay = timeDelay + 30;
        if (index === array.length - 1) {
          timeDelay = 0;
          e.addEventListener(
            "animationend",
            () => {
              technologiesIKnowElements.forEach((e) => {
                e.classList.add("hidden");
              });
              learningRoadmapElements.forEach((e) => {
                e.classList.replace("hidden", "flex");
                e.classList.add("opacity-0");
                if (e.classList.contains("animate-skillsDisappearing")) {
                  e.classList.replace("animate-skillsDisappearing", "animate-skillsAppearing");
                } else {
                  e.classList.add("animate-skillsAppearing");
                }
                const htmlElement = e as HTMLElement;
                htmlElement.style.animationDelay = `${timeDelay}ms`;
                timeDelay = timeDelay + 30;
                e.addEventListener("animationend", () => {
                  e.classList.remove("opacity-0");
                });
              });
            },
            { once: true }
          );
        }
      });
    } else {
      return;
    }
  };

  const buttonTechnologiesIKnow = () => {
    var timeDelay: number = 0;
    if (technologiesIKnowSelected.current === true) {
      return;
    } else {
      technologiesIKnowSelected.current = true;
      learningRoadmapElements.forEach((e, index, array) => {
        const htmlElement = e as HTMLElement;
        htmlElement.style.animationDelay = `${timeDelay}ms`;
        e.classList.replace("animate-skillsAppearing", "animate-skillsDisappearing");
        timeDelay = timeDelay + 30;
        if (index === array.length - 1) {
          var innerTimeDelay: number = 0;
          e.addEventListener(
            "animationend",
            () => {
              learningRoadmapElements.forEach((e) => {
                e.classList.replace("flex", "hidden");
              });
              technologiesIKnowElements.forEach((e) => {
                e.classList.add("opacity-0");
                const htmlElement = e as HTMLElement;
                htmlElement.style.animationDelay = `${innerTimeDelay}ms`;
                e.classList.replace("animate-skillsDisappearing", "animate-skillsAppearing");
                e.classList.replace("hidden", "flex");
                console.log(innerTimeDelay);
                innerTimeDelay = innerTimeDelay + 30;
                e.addEventListener("animationend", () => {
                  e.classList.remove("opacity-0");
                });
              });
              console.log("Yo3");
            },
            { once: true }
          );
        }
      });
    }
  };

  useEffect(() => {
    const learningRoadmapEl = document.querySelectorAll(".learningRoadmap");

    var timeDelay: number = 250;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayedScrollAnimation.current.has(entry.target)) {
            technologiesIKnowElements.push(entry.target);
            const target = entry.target as HTMLElement;
            target.style.animationDelay = `${timeDelay}ms`;
            entry.target.classList.remove("hidden");
            entry.target.classList.add("flex");
            timeDelay = timeDelay + 30;
            entry.target.classList.add("animate-skillsAppearing");
            hasPlayedScrollAnimation.current.add(entry.target);
            entry.target.addEventListener("animationend", () => {
              entry.target.classList.remove("opacity-0");
            });
          } else {
            // entry.target.classList.remove("animate-skills");
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll(".technologiesIKnow");

    elements.forEach((el) => {
      observer.observe(el);
    });

    learningRoadmapEl.forEach((e) => {
      learningRoadmapElements.push(e);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={Robot.className}>
      <div className="w-screen h-screen bg-teal-900">
        <div className=" w-full h-3/12 text-center content-center place-items-center">
          <div className="bg-teal-950 w-1/2 rounded-lg">
            <h1 className="lg:text-3xl text-lg mb-7"> About Me:</h1>
            <p className="lg:text-2xl text-md">
              These are a couple of technologies I know and will work with in the future. I also have a road map which are technologies I want to learn in the
              future to become a more well rounded developer
            </p>
          </div>
        </div>
        <div className=" w-full h-7/12  place-items-center pt-5">
          <div className=" lg:w-1/3 lg:h-2/12 mt-10 lg:mt-0 grid grid-cols-2 place-items-center">
            <button
              type="button"
              onClick={buttonTechnologiesIKnow}
              className="z-10 relative px-4 py-2 mx-5 lg:h-1/2 h-full bg-teal-950 text-white rounded-lg hover:bg-gradient-to-t hover:from-teal-950 hover:to-gray-400 transition cursor-pointer"
            >
              Technologies I know
            </button>

            <button
              type="button"
              onClick={buttonLearningRoadmap}
              className="px-4 py-2 mx-5 lg:h-1/2 h-full text-white rounded-lg bg-teal-950 hover:bg-gradient-to-t hover:from-teal-950 hover:to-gray-400 transition cursor-pointer"
            >
              Learning roadmap
            </button>
          </div>
          <div className="bg-teal-950 lg:w-8/12 lg:h-1/2 h-50/64 w-55/64 my-13 rounded-3xl grid lg:grid-cols-7 grid-cols-4">
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 lg:w-20 lg:h-8/12 h-1/3 mx-5 my-5 items-center flex-col pt-1  hidden learningRoadmap">
              <TbBrandThreejs className="text-4xl lg:text-5xl" />
              <p className="text-[13px] hidden lg:block">Threejs</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 lg:w-20 lg:h-8/12 h-1/3 mx-5 my-5 items-center flex-col pt-1  hidden  learningRoadmap">
              <FaAws className="text-4xl lg:text-5xl" />
              <p className="text-[13px] hidden lg:block">AWS</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 lg:w-20 lg:h-8/12 h-1/3 mx-5 my-5 items-center flex-col pt-1  hidden  learningRoadmap">
              <TbBrandReactNative className="text-4xl lg:text-5xl" />
              <p className="text-[13px] hidden lg:block">React Native</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 lg:w-20 lg:h-8/12 h-1/3 mx-5 my-5 items-center flex-col pt-1  hidden learningRoadmap">
              <IoLogoElectron className="text-4xl lg:text-5xl" />
              <p className="text-[13px] hidden lg:block">Electronjs</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 lg:w-20 lg:h-8/12 h-1/3 mx-5 my-5 items-center flex-col pt-1  hidden learningRoadmap">
              <FaNode className="text-4xl lg:text-5xl" />
              <p className="text-[13px] hidden lg:block">Nodejs</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 lg:w-20 lg:h-8/12 h-1/3 mx-5 my-5 items-center flex-col pt-1  hidden  learningRoadmap">
              <FaDocker className="text-4xl lg:text-5xl" />
              <p className="text-[13px] hidden lg:block">Docker</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 lg:w-20 lg:h-8/12 h-1/3 mx-5 my-5 items-center flex-col pt-1  hidden learningRoadmap">
              <IoLogoFirebase className="text-4xl lg:text-5xl" />
              <p className="text-[13px] hidden lg:block">Firebase</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 lg:w-20 lg:h-8/12 h-1/3 mx-5 my-5 items-center flex-col pt-1  hidden learningRoadmap">
              <GiArtificialIntelligence className="text-4xl lg:text-5xl" />
              <p className="text-[13px] hidden lg:block">AI</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 lg:w-20 lg:h-8/12 mx-5 my-5 flex items-center flex-col pt-1 technologiesIKnow opacity-0 ">
              <FaReact className="text-4xl lg:text-5xl" />
              <p className="text-[13px] hidden lg:block">React</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 lg:w-20 lg:h-8/12 mx-5 my-5 flex items-center flex-col pt-1 technologiesIKnow opacity-0 ">
              <SiNextdotjs className="text-4xl lg:text-5xl" />
              <p className="text-[13px] hidden lg:block">Next.js</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 lg:w-20 lg:h-8/12 mx-5 my-5 flex items-center flex-col pt-1 technologiesIKnow opacity-0 ">
              <SiTypescript className="text-4xl lg:text-5xl" />
              <p className="text-[13px] hidden lg:block">Typescript</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 lg:w-20 lg:h-8/12 mx-5 my-5 flex items-center flex-col pt-1 technologiesIKnow opacity-0 ">
              <FaJs className="text-4xl lg:text-5xl" />
              <p className="text-[13px] hidden lg:block">Javascript</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 lg:w-20 lg:h-8/12 mx-5 my-5 flex items-center flex-col pt-1 technologiesIKnow opacity-0 ">
              <FaHtml5 className="text-4xl lg:text-5xl" />
              <p className="text-[13px] hidden lg:block">HTML5</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 lg:w-20 lg:h-8/12 mx-5 my-5 flex items-center flex-col pt-1 technologiesIKnow opacity-0 ">
              <FaCss3Alt className="text-4xl lg:text-5xl" />
              <p className="text-[13px] hidden lg:block">CSS3</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 lg:w-20 lg:h-8/12 mx-5 my-5 flex items-center flex-col pt-1 technologiesIKnow opacity-0 ">
              <RiTailwindCssFill className="text-4xl lg:text-5xl" />
              <p className="text-[13px] hidden lg:block">Tailwind</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 lg:w-20 lg:h-8/12 mx-5 my-5 flex items-center flex-col pt-1 technologiesIKnow opacity-0 ">
              <SiPrisma className="text-4xl lg:text-5xl" />
              <p className="text-[13px] hidden lg:block">Prisma</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 lg:w-20 lg:h-8/12 mx-5 my-5 flex items-center flex-col pt-1 technologiesIKnow opacity-0 ">
              <SiPostgresql className="text-4xl lg:text-5xl" />
              <p className="text-[13px] hidden lg:block">Postgresql</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 lg:w-20 lg:h-8/12 mx-5 my-5 flex items-center flex-col pt-1 technologiesIKnow opacity-0 ">
              <IoLogoVercel className="text-4xl lg:text-5xl" />
              <p className="text-[13px] hidden lg:block">Vercel</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 lg:w-20 lg:h-8/12 mx-5 my-5 flex items-center flex-col pt-1 technologiesIKnow opacity-0">
              <FaGitAlt className="text-4xl lg:text-5xl" />
              <p className="text-[13px] hidden lg:block">GIT</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 lg:w-20 lg:h-8/12 mx-5 my-5 flex items-center flex-col pt-1 technologiesIKnow opacity-0">
              <FaSquareGithub className="text-4xl lg:text-5xl" />
              <p className="text-[13px] hidden lg:block">Github</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 lg:w-20 lg:h-8/12 mx-5 my-5 flex items-center flex-col pt-1 technologiesIKnow opacity-0">
              <TbBrandCSharp className="text-4xl lg:text-5xl" />
              <p className="text-[13px] hidden lg:block">C#</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 lg:w-20 lg:h-8/12 mx-5 my-5 flex items-center flex-col pt-1 technologiesIKnow opacity-0">
              <SiN8N className="text-4xl lg:text-5xl" />
              <p className="text-[13px] hidden lg:block">N8N</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
