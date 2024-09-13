"use client";
import React, { useEffect, useRef, useState } from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Wrapper() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [actveSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = [
      { ref: homeRef, id: "home" },
      { ref: aboutRef, id: "about" },
      { ref: projectsRef, id: "projects" },
      { ref: contactRef, id: "contact" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.5 }
    );
    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });
    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);

  return (
    <>
      <section
        id="home"
        ref={homeRef}
        className={`section w-dvw ${actveSection !== "home" ? "blurred" : ""}`}
      >
        <Home />
      </section>
      <section
        id="about"
        ref={aboutRef}
        className={`section ${actveSection !== "about" ? "blurred" : ""}`}
      >
        <About />
      </section>
      <section
        id="projects"
        ref={projectsRef}
        className={`section ${actveSection !== "projects" ? "blurred" : ""}`}
      >
        <Projects />
      </section>
      <section
        id="contact"
        ref={contactRef}
        className={`section ${actveSection !== "contact" ? "blurred" : ""}`}
      >
        <Contact />
      </section>
    </>
  );
}
