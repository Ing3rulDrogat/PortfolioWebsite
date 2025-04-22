import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="bg-amber-500  lg:h-200 lg:w-250  flex justify-center items-center">
          <div className="bg-amber-500 text-center h-[90%] w-[90%] flex flex-col">
            <div className="bg-blue-500 w-full h-1/4 flex justify-center items-center">
              <div className="bg-red-500 w-1/4 h-full flex"> Front End</div>
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
                <div className="bg-pink-500 w-1/2 h-full "> RAAAAAAAAH</div>
                <div className="bg-red-500 w-1/4 h-full "> About me </div>
              </div>
            </div>
            <div className="bg-blue-500 w-full h-1/4 flex justify-center items-center">
              <div className="bg-red-500 w-1/4 h-full flex">CV Download</div>
              <div className="bg-red-500 w-1/4 h-full flex"> ToDo:</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
