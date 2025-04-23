import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareEnvelope } from "react-icons/fa6";
import { Roboto } from "next/font/google";

function StartPage() {
  return (
    <div className="w-screen h-screen bg-teal-950 overflow-x-hidden flex items-center justify-center">
      <div className=" w-1/2 h-9/12 flex justify-center  text-center flex-wrap">
        <div className=" w-full h-1/2 pt-10">
          <h1 className="text-5xl primary-font ">Mihai Trif</h1>
          <h1 className="text-4xl">Full Stack</h1>
          <h1 className="text-4xl">
            <b className="text-green-300">Software </b>Developer
          </h1>
          <div className=" w-full h-7/12 justify-center flex">
            <div className=" w-1/2 h-2/12 ">
              <div className=" w-full h-full flex text-center justify-center">
                <MdLocationOn size={30} />
                <h2 className=" text-2xl">Scunthorpe, England</h2>
              </div>
              <div className=" w-full h-full flex text-center justify-center pt-1">
                <FaLinkedin size={30} />
                <FaGithubSquare size={30} />
                <FaSquareEnvelope size={30} />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-1/2">
          <div>
            <h1 className="text-3xl">About me</h1>
          </div>
          <div>
            <p>
              I’m Mihai, a 20-year-old computer science student with a strong
              passion for technology and problem-solving. I thrive on tackling
              complex challenges and continuously expanding my knowledge in both
              frontend and backend development. My goal is to build efficient,
              user-friendly applications while growing as a well-rounded
              software developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
