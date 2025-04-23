import Image from "next/image";

import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import Skills from "@/components/Skills";
import { useRef } from "react";
import Projects from "@/components/Projects";
import StartPage from "@/components/StartPage";

export default function Home() {
  return (
    <>
      <div className="h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden">
        <section className="h-screen snap-start">
          <StartPage />
        </section>
        <section className="h-screen snap-start">
          <Skills />
        </section>

        <section className="h-screen snap-start">
          <Projects />
        </section>
      </div>
    </>
  );
}

{
  /*<div className="flex justify-center items-center w-screen h-screen">
        <div className="bg-gray-500/50 lg:h-220 lg:w-300  flex justify-center items-center rounded-3xl">
          <div className="text-center h-[95%] w-[95%] flex flex-col">
            <div className="bg-blue-500 w-full h-1/4 flex justify-center items-center">
              <div className="bg-red-500 w-1/4 h-full flex  flex-col">
                <h1 className="text-2xl mb-2"> Front End:</h1>
                <div className="flex pl-2 h-full flex-wrap">
                  <div className="h-1/2 w-1/4">
                    <div className="justify-center flex">
                      <FaReact size={40} />
                    </div>
                    <p>React</p>
                  </div>
                  <div className="h-1/2 w-1/4">
                    <div className="justify-center flex">
                      <SiNextdotjs size={40} />
                    </div>
                    <p>Next.js</p>
                  </div>
                  <div className="h-1/2 w-1/4">
                    <div className="justify-center flex">
                      <FaHtml5 size={40} />
                    </div>
                    <p>HTML5</p>
                  </div>
                  <div className="h-1/2 w-1/4">
                    <div className="justify-center flex">
                      <FaCss3Alt size={40} />
                    </div>
                    <p>CSS3</p>
                  </div>
                  <div className="ml-2 mr-2">
                    <div className="justify-center flex">
                      <RiTailwindCssFill size={40} />
                    </div>
                    <p>Tailwind</p>
                  </div>
                </div>
              </div>
              <div className="bg-red-500 w-1/4 h-full flex"> Back End</div>
            </div>
            <div className="bg-blue-500 w-full h-1/4 flex justify-center items-center">
              <div className="w-full h-full flex">
                <div className="bg-red-500 w-1/4 h-full "> Work Experience</div>
                <div className="bg-pink-500 w-1/2 h-full ">
                  <p className="text-4xl pt-8 motion-preset-typewriter-[24]">
                    Mihai Trif
                  </p>
                  <h1 className="text-4xl">Full Stack</h1>
                  <h1 className="text-4xl">Software Developer</h1>
                </div>
                <div className="bg-red-500 w-1/4 h-full "> Education</div>
              </div>
            </div>
            <div className="bg-blue-500 w-full h-1/4 flex justify-center items-center">
              <div className="w-full h-full flex">
                <div className="bg-red-500 w-1/4 h-full "> Projects</div>
                <div className="bg-pink-500 w-1/2 h-full">
                  <div className="flex justify-center pb-2">
                    <FaLinkedin size={50} />
                    <FaGithubSquare size={50} />
                  </div>
                  <div className="bg-yellow-500 w-ull h-full">
                    <h1 className="text-2xl pt-1">About me</h1>
                    <p> Hi</p>
                  </div>
                </div>
                <div className="bg-red-500 w-1/4 h-full "> Cuuh </div>
              </div>
            </div>
            <div className="bg-blue-500 w-full h-1/4 flex justify-center items-center">
              <div className="bg-red-500 w-1/4 h-full flex">CV Download</div>
              <div className="bg-red-500 w-1/4 h-full flex">
                {" "}
                ToDo: Rest Apis.
              </div>
            </div>
          </div>
        </div>
      </div> */
}
