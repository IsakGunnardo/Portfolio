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
        <div className="absolute bg-ardo bg-opacity-85 text-black left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <button onClick={() => {setOpen((prev) => !prev); scrollHome();}}>Home {`>`} </button>
          <Link href="#about" onClick={() => setOpen((prev) => !prev)}>
            About{`>`} 
          </Link>
          <Link href="#projects" onClick={() => setOpen((prev) => !prev)}>
            Projects{`>`} 
          </Link>
          <Link href="#contact" onClick={() => setOpen((prev) => !prev)}>
            Contact{`>`} 
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
