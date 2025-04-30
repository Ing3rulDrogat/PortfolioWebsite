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
import { SiCplusplus } from "react-icons/si";

import { FaAws } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoElectron } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";

import { Roboto } from "next/font/google";
const Robot = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  preload: true,
});

function Skills() {
  const hasPlayed = useRef<Set<Element>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed.current.has(entry.target)) {
            entry.target.classList.add("animate-skills");
            hasPlayed.current.add(entry.target);
          } else {
            entry.target.classList.remove("animate-skills");
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll(".skills");

    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={Robot.className}>
      <div className="w-screen h-screen bg-teal-900">
        <div className="bg-blue-700 w-full h-3/12 text-center content-center place-items-center">
          <div className="bg-blue-900 w-1/2 ">
            <h1 className="text-3xl mb-7"> About Me:</h1>
            <p className="text-2xl">
              I am a full stack software and website developer working on
              expanding my knowledge. I have examples of a few projects on the
              next page.
            </p>
          </div>
        </div>
        <div className=" w-full h-7/12  place-items-center pt-5">
          <div className=" w-1/3 h-2/12 grid grid-cols-2 place-items-center">
            <button
              type="button"
              className="z-10 relative px-4 py-2 mx-5 h-1/2 bg-amber-700 text-white rounded hover:bg-blue-700 transition cursor-pointer button-TEMP"
            >
              Technologies I know
            </button>
            <button
              type="button"
              className="px-4 py-2 mx-5 bg-amber-700 text-white rounded hover:bg-blue-700 transition cursor-pointer"
            >
              Learning roadmap
            </button>
          </div>
          <div className="bg-teal-950 w-8/12 h-1/2 my-13 rounded-3xl grid grid-cols-7">
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 flex items-center flex-col pt-1 skills opacity-0 [animation-delay:500ms]">
              <FaReact size={50} />
              <p className="text-[13px]">React</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 flex items-center flex-col pt-1 skills opacity-0 [animation-delay:600ms]">
              <SiNextdotjs size={50} />
              <p className="text-[13px]">Next.js</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 flex items-center flex-col pt-1 skills opacity-0 [animation-delay:700ms]">
              <SiTypescript size={46} />
              <p className="text-[13px]">Typescript</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 flex items-center flex-col pt-1 skills opacity-0 [animation-delay:800ms]">
              <FaJs size={50} />
              <p className="text-[13px]">Javascript</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 flex items-center flex-col pt-1 skills opacity-0 [animation-delay:900ms]">
              <FaHtml5 size={50} />
              <p className="text-[13px]">HTML5</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 flex items-center flex-col pt-1 skills opacity-0 [animation-delay:1000ms]">
              <FaCss3Alt size={50} />
              <p className="text-[13px]">CSS3</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 flex items-center flex-col pt-1 skills opacity-0 [animation-delay:1100ms]">
              <RiTailwindCssFill size={50} />
              <p className="text-[13px]">Tailwind</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 flex items-center flex-col pt-1 skills opacity-0 [animation-delay:1200ms]">
              <SiPrisma size={50} />
              <p className="text-[13px]">Prisma</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 flex items-center flex-col pt-1 skills opacity-0 [animation-delay:1300ms]">
              <SiPostgresql size={50} />
              <p className="text-[13px]">Postgresql</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 flex items-center flex-col pt-1 skills opacity-0 [animation-delay:1400ms]">
              <IoLogoVercel size={50} />
              <p className="text-[13px]">Vercel</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 flex items-center flex-col pt-1 skills opacity-0 [animation-delay:1500ms]">
              <FaGitAlt size={50} />
              <p className="text-[13px]">GIT</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 flex items-center flex-col pt-1 skills opacity-0 [animation-delay:1700ms]">
              <FaSquareGithub size={50} />
              <p className="text-[13px]">Github</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 flex items-center flex-col pt-1 skills opacity-0 [animation-delay:1800ms]">
              <TbBrandCSharp size={50} />
              <p className="text-[13px]">C#</p>
            </div>
            <div className="bg-teal-950 rounded-2xl border-2 border-green-300 w-20 h-8/12 mx-5 my-5 flex items-center flex-col pt-1 skills opacity-0 [animation-delay:1900ms]">
              <SiCplusplus size={50} />
              <p className="text-[13px]">C++</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
