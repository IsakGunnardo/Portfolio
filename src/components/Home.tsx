import Image from "next/image";
import React from "react";
import {
  FaDownload,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import profilBild from "/Users/isakgunnardo/nyportfolio/portfoliony/public/img.jpeg";
import TypeWritingEffect from "./TypeWritingEffect";

const Home = () => {
  return (
    <div id="home" className="flex-col text-white text-opacity-85 gap-16 md:flex  w-full h-dvh py-20 ">
      <div className="flex items-center relative mb-10 w-2/3 mx-auto justify-center p-2 bg-gradient-to-br from-gray-500 via-blue-200 to-black rounded-full md:hidden">
        <div className="absolute -top-8 -left-8 w-48 h-48 bg-gradient-to-r from-blue-300 via-white to-blue-300 rounded-full blur-2xl opacity-70 z-0"></div>
        <div className="absolute -bottom-6 -right-10 w-40 h-40 bg-gradient-to-l from-blue-400 via-white to-blue-400 rounded-full blur-2xl opacity-70 z-1"></div>

        <Image
          src={profilBild}
          alt=" "
          className="rounded-full w-full filter grayscale"
        />
      </div>
      <div className="flex items-center justify-between">
        {/* LEFT */}
        <div className="flex flex-col gap-6 md:w-1/2">
          {/* NAMN */}
          <div className="w-fit bg-yellow-500 rounded-md text-black text--opacity-55 font-semibold p-0.5">
            Isak Gunnardo
          </div>
          {/* OLIKA TITLAR  */}
          <TypeWritingEffect />
          {/* LITE INFO */}
          <div className=" text--opacity-55 font-semibold text-ardo">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            accusantium corrupti, asperiores minus praesentium magnam eius
            assumenda quidem necessitatibus officia.
          </div>
          {/* TVÅ BUTTONS  */}
          <div className="flex items-center justify-center md:flex md:items-center md:justify-start text-black gap-4">
            <a href="#contact">
              <button className="font-semibold bg-blue-400 p-1 rounded-md   focus:outline-none focus:ring-2 hover:scale-105 ">
                Hire Me
              </button>
            </a>
            <a href="/assets/CV.pdf" download="CV.pdf">
              <button className=" font-semibold flex gap-4 items-center justify-center bg-ardo p-1 rounded-md  focus:outline-none focus:ring-2 hover:scale-105 ">
                Download CV
                <FaDownload />
              </button>
            </a>
          </div>
          {/* SOCIALAMEDIER  */}
          <div className=" flex items-center justify-center w-full text-1xl md:flex md:justify-start gap-4 text-3xl text-black text-opacity-80 ">
            <FaFacebook className="bg-ardo p-1 rounded-full shadow-sm shadow-white focus:outline-none focus:ring-2 hover:scale-105 hover:text-blue-900 hover:bg-white " />
            <FaLinkedin className="bg-ardo p-1 rounded-full shadow-sm shadow-white focus:outline-none focus:ring-2 hover:scale-105 hover:text-blue-900 hover:bg-white" />
            <FaGithub className="bg-ardo p-1 rounded-full shadow-sm shadow-white focus:outline-none focus:ring-2 hover:scale-105 hover:text-blue-900 hover:bg-white" />
            <FaYoutube className="bg-ardo p-1 rounded-full shadow-sm shadow-white focus:outline-none focus:ring-2 hover:scale-105 hover:text-blue-900 hover:bg-white" />
          </div>
        </div>
        {/* RIGHT  */}
        <div className="hidden md:flex items-center relative  mx-auto justify-center p-2 bg-gradient-to-br from-gray-500 via-blue-200 to-black rounded-full">
          <div className="absolute -top-8 -left-8 w-48 h-48 bg-gradient-to-r from-blue-300 via-white to-blue-300 rounded-full blur-2xl opacity-70 z-0"></div>
          <div className="absolute -bottom-6 -right-10 w-40 h-40 bg-gradient-to-l from-blue-400 via-white to-blue-400 rounded-full blur-2xl opacity-70 z-1"></div>

          <Image
            src={profilBild}
            alt=" "
            className="rounded-full w-full filter grayscale"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
