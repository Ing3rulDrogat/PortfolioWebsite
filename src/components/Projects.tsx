import React from "react";

function Projects() {
  return (
    <div className="w-screen h-screen bg-teal-950 overflow-x-hidden">
      <div className="w-full h-1/12 content-center text-center">
        <h1 className="text-5xl"> Projects:</h1>
      </div>
      <div className=" w-full h-full content-center place-items-center ">
        <div className=" w-11/12 h-9/12 mb-25 grid grid-cols-3 content-center place-items-center">
          <div className="bg-teal-900 w-100 h-100 shadow-lg shadow-black rounded-3xl">
            <img></img>
          </div>
          <div className="bg-teal-900 w-100 h-100 shadow-lg shadow-black rounded-3xl place-items-center">
            <div className="bg-amber-500 w-11/12 h-1/3 mt-2 "> Image</div>
          </div>
          <div className="bg-teal-900 w-100 h-100 shadow-lg shadow-black rounded-3xl">
            <img></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
