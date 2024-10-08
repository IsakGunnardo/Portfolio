import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  FaDownload,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import profilBild from "/public/img.png";
import TypeWritingEffect from "./TypeWritingEffect";

const Home = () => {
  const handleDownload = () => {
    const files = [
      {
        // Sogeti_CV.pdf
        fileName: "",
        fileUrl: ""
        // /assets/Sogeti_CV.pdf
      },
      {
        // letter.pdf
        fileName: "",
        fileUrl: ""
        // /assets/Sogeti_letter.pdf
      },
    ];

    files.forEach((file) => {
      const link = document.createElement("a");
      link.href = file.fileUrl;
      link.download = file.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link)
    });
  };
  const scrollToSection = (id: any) => {
    const section = document.querySelector(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      id="home"
      className="flex-col px-16 py-12 md:px-32 items-center  border-b-2  text-white text-opacity-85 gap-16 md:flex  w-full h-dvh md:py-40 "
    >
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
            I am a passionate web developer with experience in both front-end
            and back-end development. I create custom web applications and
            websites that not only look good but also works smoothly and
            efficiently.
          </div>
          {/* TVÅ BUTTONS  */}
          <div className="flex items-center justify-center md:flex md:items-center md:justify-start text-black gap-4">
            <button
              onClick={() => scrollToSection("#contact")}
              className="font-semibold bg-blue-400 p-1 rounded-md   focus:outline-none shadow-md focus:ring-2 hover:scale-105 "
            >
              Hire Me
            </button>

<a href="#" >
{/* onClick={handleDownload} */}
<button className=" font-semibold flex gap-4 items-center justify-center opacity-55 cursor-not-allowed bg-[#F5F5F5] shadow-md p-1 rounded-md  focus:outline-none focus:ring-2 hover:scale-105 ">Download CV & letter
<FaDownload />

</button>
  
</a>
 
          </div>
          {/* SOCIALAMEDIER  */}
          <div className=" flex items-center justify-center w-full text-1xl md:flex md:justify-start gap-4 text-3xl text-black text-opacity-80 ">
            <a href="https://www.facebook.com/isak.carlson/">
              <FaFacebook className=" p-1 rounded-full  bg-[#F5F5F5] shadow-md focus:outline-none focus:ring-2 hover:scale-105 hover:text-blue-900 hover:bg-white " />
            </a>

            <a href="https://www.linkedin.com/in/isak-gunnardo-791191247/">
              <FaLinkedin className=" p-1 rounded-full  bg-[#F5F5F5] shadow-md focus:outline-none focus:ring-2 hover:scale-105 hover:text-blue-900 hover:bg-white" />
            </a>

            <a href="https://github.com/IsakGunnardo">
              <FaGithub className=" p-1 rounded-full  bg-[#F5F5F5] shadow-md focus:outline-none focus:ring-2 hover:scale-105 hover:text-blue-900 hover:bg-white" />
            </a>

            <a href="https://www.youtube.com/@ultising">
              <FaYoutube className=" p-1 rounded-full  bg-[#F5F5F5] shadow-md focus:outline-none focus:ring-2 hover:scale-105 hover:text-blue-900 hover:bg-white" />
            </a>
          </div>
        </div>
        {/* RIGHT  */}
        <div className="hidden md:flex relative  w-96 rounded-full justify-center p-2 bg-gradient-to-br from-gray-500 via-black-200 to-black overflow-hidden">
          <div className="absolute -top-8 -left-8 w-48 h-48 bg-gradient-to-r from-black-300 via-black to-black-300 rounded-full blur-2xl opacity-70 z-0"></div>
          <div className="absolute -bottom-6 -right-10 w-40 h-40 bg-gradient-to-l from-black-400 via-white to-black-400 rounded-full blur-2xl opacity-70 z-1"></div>

          <Image
            src={profilBild}
            alt=" "
            className="rounded-full  filter grayscale"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
