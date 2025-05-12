"use client";

import React from "react";
import { useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import NLC from "../../public/NLC.png";
import UCNL from "../../public/UCNL.png";
import WEBCETERA from "../../public/webcetera.png";

interface CardProps {
  imgSrc: string;
  title: string;
  link: string;
  description: string;
  completion: string;
}

function WorkAndEducation() {
  return (
    <div className="w-screen min-h-screen bg-teal-900 flex flex-col items-center pt-2 lg:py-10 px-4">
      <div className="w-full max-w-screen-xl mb-2 lg:mb-6">
        <h1 className="text-2xl md:text-4xl text-white">Education</h1>
      </div>

      <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-6">
        <Card
          imgSrc={NLC.src}
          title="North Lindsey College (Level 3)"
          link="https://northlindsey.ac.uk/"
          description="T Level Digital Production Design and Development"
          completion="Completed 2023"
        />
        <Card
          imgSrc={UCNL.src}
          title="DN Colleges UCNL (Level 4)"
          link="https://ucnl.ac.uk/"
          description="Digital Technologies (HTQ) - Software Development & Programming"
          completion="Completed 2024"
        />
        <Card
          imgSrc={UCNL.src}
          title="DN Colleges UCNL (Level 5)"
          link="https://ucnl.ac.uk/"
          description="HND Software Development & Programming"
          completion="To Be Completed in 2025"
        />
      </div>

      <div className="w-full max-w-screen-xl lg:my-10 my-3">
        <h1 className="text-2xl md:text-4xl text-white">Work</h1>
      </div>

      <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          imgSrc={WEBCETERA.src}
          title="Webcetera (Work Experience)"
          link="https://webcetera.co.uk/"
          description="I gained industry experience at Webcetera, where I observed how professionals design websites and manage client projects."
          completion="Completed 2023"
        />
      </div>
    </div>
  );
}

// Reusable Card component
function Card({ imgSrc, title, link, description, completion }: CardProps) {
  return (
    <div className="bg-teal-950 rounded-3xl p-2 lg:p-4 flex flex-col justify-start shadow-lg">
      <div className="flex items-start gap-2">
        <div className="w-10 h-10 lg:w-20 lg:h-20 bg-blue-400 rounded-2xl overflow-hidden flex-shrink-0">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={imgSrc} alt="Logo" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
          </a>
        </div>
        <h2 className="text-white text-md md:text-2xl font-semibold">{title}</h2>
      </div>
      <p className="text-white text-sm md:text-md mt-3">{description}</p>
      <p className="text-white text-center text-sm md:text-2xl mt-6">
        <b>{completion}</b>
      </p>
    </div>
  );
}

export default WorkAndEducation;
