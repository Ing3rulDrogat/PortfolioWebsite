"use client";

import React from "react";
import { useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import NLC from "../../public/NLC.png";
import UCNL from "../../public/UCNL.png";
import WEBCETERA from "../../public/webcetera.png";

function WorkAndEducation() {
  return (
    <div className="w-screen h-screen bg-teal-900 place-items-center ">
      <div className="w-30/32 h-5/32 content-end pr-10">
        <h1 className="text-4xl">Education</h1>
      </div>
      <div className=" w-30/32 h-1/4  mt-10 grid grid-cols-3 place-items-center">
        <div className="w-55/64 h-60/64 bg-teal-950 rounded-3xl p-4 flex flex-col justify-start">
          <div className="flex flex-row items-start gap-4">
            <div className="w-20 h-20 bg-blue-400 overflow-hidden rounded-2xl cursor-pointer">
              <a target="_blank" rel="noopener noreferrer" href="https://northlindsey.ac.uk/">
                <img src={NLC.src} alt="Logo" className="w-full  transition-transform duration-500 ease-in-out hover:scale-120"></img>
              </a>
            </div>

            <div className="flex-1">
              <h1 className="text-white text-2xl font-semibold">North Lindsey College (Level 3)</h1>
            </div>
          </div>
          <p className="text-white text-md pt-3">T Level Digital Production Design and Development</p>
          <p className="text-white text-center mt-6 text-2xl">Completed 2023</p>
        </div>
        <div className="w-55/64 h-60/64 bg-teal-950 rounded-3xl p-4 flex flex-col justify-start">
          <div className="flex flex-row items-start gap-4">
            <div className="w-20 h-20 bg-blue-400 overflow-hidden rounded-2xl cursor-pointer">
              <a target="_blank" rel="noopener noreferrer" href="https://ucnl.ac.uk/">
                <img src={UCNL.src} alt="Logo" className="w-full  transition-transform duration-500 ease-in-out hover:scale-120"></img>
              </a>
            </div>

            <div className="flex-1">
              <h1 className="text-white text-2xl font-semibold">DN Colleges UCNL (Level 4)</h1>
            </div>
          </div>
          <p className="text-white text-md pt-3">Digital Technologies (HTQ) - Software Development & Programming</p>
          <p className="text-white text-center mt-6 text-2xl"> Completed in 2024</p>
        </div>
        <div className="w-55/64 h-60/64 bg-teal-950 rounded-3xl p-4 flex flex-col justify-start">
          <div className="flex flex-row items-start gap-4">
            <div className="w-20 h-20 bg-blue-400 overflow-hidden rounded-2xl cursor-pointer">
              <a target="_blank" rel="noopener noreferrer" href="https://ucnl.ac.uk/">
                <img src={UCNL.src} alt="Logo" className="w-full  transition-transform duration-500 ease-in-out hover:scale-120"></img>
              </a>
            </div>

            <div className="flex-1">
              <h1 className="text-white text-2xl font-semibold">DN Colleges UCNL (Level 5)</h1>
            </div>
          </div>
          <p className="text-white text-md pt-3"> HND Software Development & Programming </p>
          <p className="text-white text-center mt-6 text-2xl"> To Be Completed in 2025</p>
        </div>
      </div>
      <div className="bg-black-100 w-30/32 h-2-/32 pt-10">
        <h1 className="text-4xl"> Work</h1>
      </div>
      <div className=" w-30/32 h-1/4  mt-10 grid grid-cols-3 place-items-center">
        <div className="w-55/64 h-60/64 bg-teal-950 rounded-3xl p-4 flex flex-col justify-start">
          <div className="flex flex-row items-start gap-4">
            <div className="w-20 h-20 bg-blue-400 overflow-hidden rounded-2xl cursor-pointer">
              <a target="_blank" rel="noopener noreferrer" href="https://webcetera.co.uk/">
                <img src={WEBCETERA.src} alt="Logo" className="w-full  transition-transform duration-500 ease-in-out hover:scale-120"></img>
              </a>
            </div>

            <div className="flex-1">
              <h1 className="text-white text-2xl font-semibold">Webcetera (Work Experience)</h1>
            </div>
          </div>
          <p className="text-white text-md pt-3">
            I gained industry experience at Webcetera, where I observed how professionals design websites and manage client projects.
          </p>
          <p className="text-white text-center mt-6 text-2xl"> Completed 2023</p>
        </div>
      </div>
    </div>
  );
}

export default WorkAndEducation;
