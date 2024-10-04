"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [open, setOpen] = useState(false);

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: any) => {
    const section = document.querySelector(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const scrollHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={() => scrollHome()}
      className="hidden md:flex flex-col justify-center items-center text-center h-36 py-4 px-8 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-[#F5F5F5]  bg-opacity-85 text-black "
    >
      {/* <h1 className="text-3xl">You reached the bottom of the page</h1>
      <p>Press me to to get back to the top</p> */}
      {/* <div className="w-1/3 ">
        <ul className="flex flex-col gap-4 ">
          <h1 className="font-semibold">Contact</h1>
          <div className="text-center">
            <li className="ml-2">
              <strong>Phone:</strong> +46 73 828 4775
            </li>
            <li className="ml-2">
              <a href="mailto:isak.gunnardo@ardodev.se">
                <strong>Email: </strong>
                <span className="">isak.gunnardo@ardodev.se</span>
              </a>
            </li>
          </div>
        </ul>
      </div>
      <div className="w-1/3 ">
        <h1 className="font-semibold">Socials</h1>
        <div className=" flex flex-col py-2 items-center justify-center w-full text-1xl md:flex md:justify-start gap-4 text-3xl text-black text-opacity-80 ">
          <div className="flex">
            <FaFacebook className=" p-1 rounded-full bg-[#F5F5F5] shadow-md focus:outline-none focus:ring-2 hover:scale-105 hover:text-blue-900 hover:bg-blue-200 " />
            <FaLinkedin className=" p-1 rounded-full bg-[#F5F5F5] shadow-md focus:outline-none focus:ring-2 hover:scale-105 hover:text-blue-900 hover:bg-blue-200 " />
          </div>
          <div className="flex">
            <FaGithub className=" p-1 rounded-full bg-[#F5F5F5] shadow-md focus:outline-none focus:ring-2 hover:scale-105 hover:text-blue-900 hover:bg-blue-200 " />
            <FaYoutube className=" p-1 rounded-full bg-[#F5F5F5] shadow-md focus:outline-none focus:ring-2 hover:scale-105 hover:text-blue-900 hover:bg-blue-200 " />
          </div>
        </div>
      </div>
      <div className="w-1/3">
        <div className="flex flex-col font-semibold">
          <button onClick={() => scrollHome()}>Home{`>`} </button>

          <button onClick={() => scrollToSection("#about")}>About{`>`} </button>
          <button onClick={() => scrollToSection("#projects")}>
            Projects{`>`}{" "}
          </button>
          <button onClick={() => scrollToSection("#contact")}>
            Contact{`>`}{" "}
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
