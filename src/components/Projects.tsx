import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import NexCircle from "../../public/NexCircle.png";
import Portfolio from "../../public/Portfolio.png";
function Projects() {
  return (
    <div className="w-screen h-screen bg-teal-950">
      <div className="w-full h-1/12 content-center text-center">
        <h1 className="text-5xl"> Projects:</h1>
      </div>
      <div className=" w-full h-full content-center place-items-center ">
        <div className=" w-11/12 h-9/12 mb-25 grid grid-cols-1">
          <div className="bg-teal-900 w-full h-50 shadow-lg shadow-black rounded-3xl flex">
            <div className=" content-center lg:w-1/12 lg:h-full w-1/2 ml-5">
              <div className=" overflow-hidden  rounded-2xl">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ing3rulDrogat/NexCircle">
                  <img src={NexCircle.src} alt="Logo" className="w-full  transition-transform duration-500 ease-in-out hover:scale-120"></img>
                </a>
              </div>
            </div>
            <div className=" w-full h-full pl-5 flex flex-col">
              <div className="w-full h-2/3 content-center">
                <p className="hidden text-2xl lg:block pr-5">
                  NexCircle is a full-stack social media application built with Next.js, featuring responsive design, secure authentication, file uploads, and
                  modern UI components. This project highlights my skills in frontend, backend, and database management, while showcasing a clean, scalable, and
                  user-friendly web experience.
                </p>
                <p className="text-lg lg:hidden pr-5">NexCircle is a full-stack social media application built with Next.js</p>
              </div>
            </div>
          </div>
          <div className="bg-teal-900 w-full h-50 shadow-lg shadow-black rounded-3xl flex">
            <div className=" content-center lg:w-1/12 lg:h-full w-1/2 ml-5">
              <div className=" overflow-hidden  rounded-2xl">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ing3rulDrogat/PortfolioWebsite">
                  <img src={Portfolio.src} alt="Logo" className="w-full  transition-transform duration-500 ease-in-out hover:scale-120"></img>
                </a>
              </div>
            </div>
            <div className=" w-full h-full pl-5 flex flex-col">
              <div className="w-full h-2/3 content-center">
                <p className="hidden text-2xl lg:block pr-5">
                  This portfolio is built with Next.js and React, featuring a fast, responsive design and clean component structure. It showcases my web
                  development skills and personal projects.
                </p>
                <p className="text-lg lg:hidden pr-5">This portfolio is built with Next.js and React.</p>
              </div>
            </div>
          </div>
          <div className="bg-teal-900 w-full h-50 shadow-lg shadow-black rounded-3xl hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
