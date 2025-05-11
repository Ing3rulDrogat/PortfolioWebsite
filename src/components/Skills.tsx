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
            <h1 className="text-3xl mb-7"> About Me:</h1>
            <p className="text-2xl">
              These are a couple of technologies I know and will work with in the future. I also have a road map which are technologies I want to learn in the
              future to become a more well rounded developer
            </p>
          </div>
        </div>
        <div className=" w-full h-7/12  place-items-center pt-5">
          <div className=" w-1/3 h-2/12 grid grid-cols-2 place-items-center">
            <button
              type="button"
              onClick={buttonTechnologiesIKnow}
              className="z-10 relative px-4 py-2 mx-5 h-1/2 bg-teal-950 text-white rounded-lg hover:bg-gradient-to-t hover:from-teal-950 hover:to-gray-400 transition cursor-pointer"
            >
              Technologies I know
            </button>

            <button
              type="button"
              onClick={buttonLearningRoadmap}
              className="px-4 py-2 mx-5 text-white rounded-lg bg-teal-950 hover:bg-gradient-to-t hover:from-teal-950 hover:to-gray-400 transition cursor-pointer"
            >
              Learning roadmap
            </button>
          </div>
          <div className="bg-teal-950 w-8/12 h-1/2 my-13 rounded-3xl grid grid-cols-7">
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 items-center flex-col pt-1  hidden learningRoadmap">
              <TbBrandThreejs size={50} />
              <p className="text-[13px]">Threejs</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 items-center flex-col pt-1  hidden  learningRoadmap">
              <FaAws size={50} />
              <p className="text-[13px]">AWS</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 items-center flex-col pt-1  hidden  learningRoadmap">
              <TbBrandReactNative size={50} />
              <p className="text-[13px]">React Native</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 items-center flex-col pt-1  hidden learningRoadmap">
              <IoLogoElectron size={50} />
              <p className="text-[13px]">Electronjs</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 items-center flex-col pt-1  hidden learningRoadmap">
              <FaNode size={50} />
              <p className="text-[13px]">Nodejs</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 items-center flex-col pt-1  hidden  learningRoadmap">
              <FaDocker size={50} />
              <p className="text-[13px]">Docker</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 items-center flex-col pt-1  hidden learningRoadmap">
              <IoLogoFirebase size={50} />
              <p className="text-[13px]">Firebase</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 items-center flex-col pt-1  hidden learningRoadmap">
              <GiArtificialIntelligence size={50} />
              <p className="text-[13px]">AI</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 flex items-center flex-col pt-1 technologiesIKnow opacity-0 ">
              <FaReact size={50} />
              <p className="text-[13px]">React</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 flex items-center flex-col pt-1 technologiesIKnow opacity-0 ">
              <SiNextdotjs size={50} />
              <p className="text-[13px]">Next.js</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 flex items-center flex-col pt-1 technologiesIKnow opacity-0 ">
              <SiTypescript size={46} />
              <p className="text-[13px]">Typescript</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 flex items-center flex-col pt-1 technologiesIKnow opacity-0 ">
              <FaJs size={50} />
              <p className="text-[13px]">Javascript</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 flex items-center flex-col pt-1 technologiesIKnow opacity-0 ">
              <FaHtml5 size={50} />
              <p className="text-[13px]">HTML5</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 flex items-center flex-col pt-1 technologiesIKnow opacity-0 ">
              <FaCss3Alt size={50} />
              <p className="text-[13px]">CSS3</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 flex items-center flex-col pt-1 technologiesIKnow opacity-0 ">
              <RiTailwindCssFill size={50} />
              <p className="text-[13px]">Tailwind</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 flex items-center flex-col pt-1 technologiesIKnow opacity-0 ">
              <SiPrisma size={50} />
              <p className="text-[13px]">Prisma</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 flex items-center flex-col pt-1 technologiesIKnow opacity-0 ">
              <SiPostgresql size={50} />
              <p className="text-[13px]">Postgresql</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 flex items-center flex-col pt-1 technologiesIKnow opacity-0 ">
              <IoLogoVercel size={50} />
              <p className="text-[13px]">Vercel</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 flex items-center flex-col pt-1 technologiesIKnow opacity-0">
              <FaGitAlt size={50} />
              <p className="text-[13px]">GIT</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 flex items-center flex-col pt-1 technologiesIKnow opacity-0">
              <FaSquareGithub size={50} />
              <p className="text-[13px]">Github</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 flex items-center flex-col pt-1 technologiesIKnow opacity-0">
              <TbBrandCSharp size={50} />
              <p className="text-[13px]">C#</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 flex items-center flex-col pt-1 technologiesIKnow opacity-0">
              <SiN8N size={50} />
              <p className="text-[13px]">N8N</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
