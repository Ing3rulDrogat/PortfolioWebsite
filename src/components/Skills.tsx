import React from "react";
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
  return (
    <div className={Robot.className}>
      <div className="w-screen h-screen bg-teal-900  flex items-center">
        <div className=" h-9/12 w-full flex flex-wrap">
          <div className=" w-full h-2/12">
            <h1 className="text-4xl block content-center text-center">
              Skills:
            </h1>
            <h1 className="text-3xl block content-center text-center">
              List of technologies I have worked with
            </h1>
          </div>
          <div className=" h-1/3 w-full grid grid-cols-15">
            <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/3 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer transition-shadow">
              <FaReact size={50} />
              <p className="text-[13px]">React</p>
            </div>
            <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/3 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer transition-shadow">
              <SiNextdotjs size={50} />
              <p className="text-[13px]">Next.js</p>
            </div>
            <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/3 ml-10 flex items-center flex-col  pt-1.5 hover:shadow-lg cursor-pointer transition-shadow">
              <SiTypescript size={46} />
              <p className="text-[13px]">Typescript</p>
            </div>
            <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/3 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer transition-shadow">
              <FaJs size={50} />
              <p className="text-[13px]">Javascript</p>
            </div>
            <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/3 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer transition-shadow">
              <FaHtml5 size={50} />
              <p className="text-[13px]">HTML5</p>
            </div>
            <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/3 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer transition-shadow">
              <FaCss3Alt size={50} />
              <p className="text-[13px]">CSS3</p>
            </div>
            <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/3 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer transition-shadow">
              <RiTailwindCssFill size={50} />
              <p className="text-[13px]">Tailwind</p>
            </div>
            <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/3 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer transition-shadow">
              <SiPrisma size={50} />
              <p className="text-[13px]">Prisma</p>
            </div>
            <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/3 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer transition-shadow">
              <SiPostgresql size={50} />
              <p className="text-[13px]">Postgresql</p>
            </div>
            <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/3 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer transition-shadow">
              <IoLogoVercel size={50} />
              <p className="text-[13px]">Vercel</p>
            </div>
            <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/3 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer transition-shadow">
              <FaGitAlt size={50} />
              <p className="text-[13px]">GIT</p>
            </div>
            <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/3 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer transition-shadow">
              <FaSquareGithub size={50} />
              <p className="text-[13px]">Github</p>
            </div>
            <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/3 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer transition-shadow">
              <TbBrandCSharp size={50} />
              <p className="text-[13px]">C#</p>
            </div>
            <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/3 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer transition-shadow">
              <SiCplusplus size={50} />
              <p className="text-[13px]">C++</p>
            </div>
          </div>

          <div className="h-2/12 w-full">
            <h1 className=" text-4xl text-center">Next on the list:</h1>
            <h1 className=" text-3xl text-center">
              Technologies which I will learn in the future
            </h1>
          </div>
          <div className=" h-1/3 w-full grid grid-cols-15">
            <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/3 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer transition-shadow">
              <TbBrandThreejs size={50} />
              <p className="text-[13px]">Threejs</p>
            </div>
            <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/3 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer transition-shadow">
              <FaAws size={50} />
              <p className="text-[13px]">AWS</p>
            </div>
            <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/3 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer transition-shadow">
              <TbBrandReactNative size={50} />
              <p className="text-[13px]">Native</p>
            </div>
            <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/3 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer transition-shadow">
              <IoLogoElectron size={50} />
              <p className="text-[13px]">Electron</p>
            </div>
            <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/3 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer transition-shadow">
              <FaNode size={50} />
              <p className="text-[13px]">Node</p>
            </div>
            <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/3 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer transition-shadow">
              <FaDocker size={50} />
              <p className="text-[13px]">Docker</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
