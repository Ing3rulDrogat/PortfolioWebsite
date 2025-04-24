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

function Skills() {
  return (
    <div className="w-screen h-screen bg-teal-900  flex items-center">
      <div className=" h-9/12 w-full flex flex-wrap">
        <div className=" h-1/2 w-1/2 ">
          <h1 className=" text-5xl items-center pl-14 mt-20">Technologies:</h1>
          <p className="pl-14">
            Technologies I actively use and have hands-on experience with.
          </p>
        </div>
        <div className=" h-1/2 w-1/2 flex flex-wrap pl-10 pr-10">
          <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/4 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer">
            <FaReact size={50} />
            <p className="text-[13px]">React</p>
          </div>
          <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/4 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer">
            <SiNextdotjs size={50} />
            <p className="text-[13px]">Next.js</p>
          </div>
          <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/4 ml-10 flex items-center flex-col  pt-1.5 hover:shadow-lg cursor-pointer">
            <SiTypescript size={46} />
            <p className="text-[13px]">Typescript</p>
          </div>
          <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/4 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer">
            <FaJs size={50} />
            <p className="text-[13px]">Javascript</p>
          </div>
          <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/4 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer">
            <FaHtml5 size={50} />
            <p className="text-[13px]">HTML5</p>
          </div>
          <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/4 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer">
            <FaCss3Alt size={50} />
            <p className="text-[13px]">CSS3</p>
          </div>
          <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/4 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer">
            <RiTailwindCssFill size={50} />
            <p className="text-[13px]">Tailwind</p>
          </div>
          <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/4 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer">
            <SiPrisma size={50} />
            <p className="text-[13px]">Prisma</p>
          </div>
          <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/4 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer">
            <SiPostgresql size={50} />
            <p className="text-[13px]">Postgresql</p>
          </div>
          <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/4 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer">
            <IoLogoVercel size={50} />
            <p className="text-[13px]">Vercel</p>
          </div>
          <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/4 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer">
            <FaGitAlt size={50} />
            <p className="text-[13px]">GIT</p>
          </div>
          <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/4 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer">
            <FaSquareGithub size={50} />
            <p className="text-[13px]">Github</p>
          </div>
          <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/4 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer">
            <TbBrandCSharp size={50} />
            <p className="text-[13px]">C#</p>
          </div>
          <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/4 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer">
            <SiCplusplus size={50} />
            <p className="text-[13px]">C++</p>
          </div>
        </div>

        <div className="h-1/2 w-1/2">
          <h1 className=" text-5xl items-center pl-14 mt-20">
            Next on the list:
          </h1>
          <p className="pl-14">
            Technologies I plan to learn next to further broaden my development
            skill set.
          </p>
        </div>
        <div className=" h-1/2 w-1/2 flex flex-wrap pl-10 mt-10 lg:pt-1  sm:mt-25">
          <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/4 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer">
            <TbBrandThreejs size={50} />
            <p className="text-[13px]">Threejs</p>
          </div>
          <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/4 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer">
            <FaAws size={50} />
            <p className="text-[13px]">AWS</p>
          </div>
          <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/4 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer">
            <TbBrandReactNative size={50} />
            <p className="text-[13px]">Native</p>
          </div>
          <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/4 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer">
            <IoLogoElectron size={50} />
            <p className="text-[13px]">Electron</p>
          </div>
          <div className="bg-teal-950 rounded-2xl shadow-sm shadow-green-300 w-20 h-1/4 ml-10 flex items-center flex-col  pt-1 hover:shadow-lg cursor-pointer">
            <FaNode size={50} />
            <p className="text-[13px]">Node</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
