import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import NexCircle from "../../public/NexCircle.png";

function Projects() {
  return (
    <div className="w-screen h-screen bg-teal-950">
      <div className="w-full h-1/12 content-center text-center">
        <h1 className="text-5xl"> Projects:</h1>
      </div>
      <div className=" w-full h-full content-center place-items-center ">
        <div className=" w-11/12 h-9/12 mb-25 grid grid-cols-1">
          <div className="bg-teal-900 w-full h-50 shadow-lg shadow-black rounded-3xl flex">
            <div className=" content-center w-1/12 h-full ml-5">
              <div className=" overflow-hidden  rounded-2xl">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ing3rulDrogat/NexCircle">
                  <img src={NexCircle.src} alt="Logo" className="w-full  transition-transform duration-500 ease-in-out hover:scale-120"></img>
                </a>
              </div>
            </div>
            <div className=" w-full h-full pl-5 flex flex-col">
              <div className="w-full h-2/3 content-center">
                <p className="text-sm lg:text-2xl pr-5">
                  NexCircle is a full-stack social media application built with Next.js, featuring responsive design, secure authentication, file uploads, and
                  modern UI components. This project highlights my skills in frontend, backend, and database management, while showcasing a clean, scalable, and
                  user-friendly web experience.
                </p>
              </div>
              <div className=" w-full h-1/3 grid grid-cols-8 content-center">
                <FaGithubSquare size={40} />
              </div>
            </div>
          </div>
          <div className="bg-teal-900 w-full h-50 shadow-lg shadow-black rounded-3xl  hidden lg:block"></div>
          <div className="bg-teal-900 w-full h-50 shadow-lg shadow-black rounded-3xl hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
