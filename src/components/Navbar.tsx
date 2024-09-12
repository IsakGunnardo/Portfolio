"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Menu from "./Menu";
import { FaCode, FaDownload } from "react-icons/fa";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handles scroll direction detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolling down or up
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);

      // Set if user has scrolled
      if (currentScrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 top-0 sticky transition-transform duration-300 z-20 ${
        hasScrolled ? "bg-ardo bg-opacity-85 text-black" : ""
      } ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="h-full flex items-center justify-between md:hidden">
        {/* MOBILE */}
        <Link href="/">
          <div
            className={`text-2xl tracking-wide text-ardo font-semibold ${
              hasScrolled ? " bg-opacity-85 text-black" : ""
            }`}
          >
            ARDO
          </div>
        </Link>

        <Menu />
      </div>

      {/* BIGGER SCREENS */}
      <div className="hidden md:flex gap-8 items-center justify-between h-full">
        {/* LEFT */}
        <div
          className={`w-1/3 md:w-1/3 flex items-center gap-12 text-ardo font-semibold ${
            hasScrolled ? "text-black " : ""
          }`}
        >
          <Link href="/" className="flex items-center gap-3">
            <FaCode className="text-2xl" />
            <div className="text-2xl tracking-wide">ARDO</div>
          </Link>
        </div>

        {/* CENTER */}
        <div>
          <div
            className={`hidden md:flex w-1/3 gap-4 text-ardo font-semibold ${
              hasScrolled ? "text-black " : ""
            }`}
          >
            <Link href="/" onClick={scrollTop}>
              Home
            </Link>
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="m flex">
          <a href="/assets/CV.pdf" download="CV.pdf">
            <button className="font-semibold flex gap-4 items-center justify-center bg-ardo p-1 rounded-md focus:outline-none focus:ring-2 hover:scale-105">
              Download CV
              <FaDownload />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
