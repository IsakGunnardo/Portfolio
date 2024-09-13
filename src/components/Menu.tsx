"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
const Menu = () => {
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
    <div className="">
      <RiMenu3Fill
        className={`cursor-pointer text-4xl text-ardo ${
          hasScrolled ? " bg-opacity-85 text-black" : ""
        }`}
        onClick={() => setOpen((prev) => !prev)}
      />
      {/* <Image src="/menu.png" alt="" /> */}
      {open && (
        <div className="absolute bg-ardo bg-opacity-85 text-[#F5F5F5] left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <button
            onClick={() => {
              setOpen((prev) => !prev);
              scrollHome();
            }}
          >
            Home 
          </button>
          <button
            onClick={() => {
              setOpen((prev) => !prev);
              scrollToSection("#about");
            }}
          >
            About 
          </button>
          <button
            onClick={() => {
              setOpen((prev) => !prev);
              scrollToSection("#projects");
            }}
          >
            Projects 
          </button>
          <button
            onClick={() => {
              setOpen((prev) => !prev);
              scrollToSection("#contact");
            }}
          >
            Contact 
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
