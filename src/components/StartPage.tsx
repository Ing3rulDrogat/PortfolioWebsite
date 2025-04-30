import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareEnvelope } from "react-icons/fa6";

import { Roboto } from "next/font/google";
const Robot = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  preload: true,
});

function StartPage() {
  const timer = 5000;
  return (
    <div className={Robot.className}>
      <div className="w-screen h-screen bg-teal-950 overflow-x-hidden flex items-center justify-center">
        <div className=" w-1/2 h-9/12 flex justify-center  text-center flex-wrap">
          <div className=" w-full h-1/2 pt-10">
            <div className=" flex justify-center items-center animate-nameDiv">
              <h1 className="text-5xl [animation-delay:500ms] animate-name opacity-0 ">
                M
              </h1>
              <h1 className="text-5xl [animation-delay:600ms] animate-name opacity-0">
                i
              </h1>
              <h1 className="text-5xl [animation-delay:700ms] animate-name opacity-0">
                h
              </h1>
              <h1 className="text-5xl [animation-delay:800ms] animate-name opacity-0">
                a
              </h1>
              <h1 className="text-5xl [animation-delay:900ms] animate-name opacity-0">
                i
              </h1>
              <h1 className="text-5xl [animation-delay:1000ms] ml-2 animate-name opacity-0">
                T
              </h1>
              <h1 className="text-5xl [animation-delay:1100ms] animate-name opacity-0">
                r
              </h1>
              <h1 className="text-5xl [animation-delay:1200ms] animate-name opacity-0">
                i
              </h1>
              <h1 className="text-5xl [animation-delay:1300ms] animate-name opacity-0">
                f
              </h1>
            </div>
            <h1 className="text-4xl animate-fullStack opacity-0">Full Stack</h1>
            <h1 className="text-4xl animate-developer opacity-0">
              <b className="text-green-300 ">Software & Website </b>
              Developer
            </h1>
            <div className=" w-full h-7/12 justify-center flex">
              <div className=" w-1/2 h-2/12 ">
                <div className=" w-full h-full flex text-center justify-center animate-location opacity-0">
                  <MdLocationOn size={30} />
                  <div>
                    <h2 className=" text-2xl">Scunthorpe, England</h2>
                  </div>
                </div>
                <div className=" w-full h-full flex text-center justify-center lg:pt-1 animate-icons opacity-0 pt-12">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/mihai-trif-609a2a297/"
                  >
                    <FaLinkedin
                      size={30}
                      className=" hover:scale-120 transition-transform animate-icon1"
                    />
                  </a>

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Ing3rulDrogat"
                  >
                    <FaGithubSquare
                      size={30}
                      className=" hover:scale-120 transition-transform animate-icon2"
                    />
                  </a>
                  <FaSquareEnvelope
                    size={30}
                    className=" hover:scale-120 transition-transform cursor-pointer animate-icon3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full h-1/2 opacity-0 animate-startAboutMe hidden lg:block">
            <div>
              <h1 className="text-3xl">About me</h1>
            </div>
            <div>
              <p>
                I’m Mihai, a 20-year-old computer science student with a strong
                passion for technology and problem-solving. I thrive on tackling
                complex challenges and continuously expanding my knowledge in
                both frontend and backend development. My goal is to build
                efficient, user-friendly applications while growing as a
                well-rounded software developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
