"use client";
import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showExperiance, setShowExperiance] = useState(false);
  const [inView, setInView] = useState(false);


  const phrases = [
    "Who am I?",
    "My name is Isak Gunnardo",
    "I'm a Developer",
    "I got experiance in frontend and backend-development",
    "Here is a list of",
    "Diffrent Skills"
    
    ,
  ];

 

  const sectionRef = useRef(null);


  useEffect(()=> {
    const observer = new IntersectionObserver(
      (enteries) => {
        const enrty = enteries[0];
        setInView(enrty.isIntersecting);
      },
      {threshold: 0.1}
    );

    if(sectionRef.current){
      observer.observe(sectionRef.current);
    }

    return () => {
      if(sectionRef.current)
      {
        observer.unobserve(sectionRef.current);
      }
    }
  }, [])
  useEffect(() => {

    const handleTyping = () => {
      const currentIndex = loopNum % phrases.length;
      const fullText = phrases[currentIndex];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );
      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        if (loopNum === phrases.length - 1) {
          setTimeout(() => setShowExperiance(true), 1500);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    if (!showExperiance) {
      const timer = setTimeout(handleTyping, typingSpeed);
      return () => clearTimeout(timer);
    }
  }, [text, isDeleting, loopNum, showExperiance]);
  return (
    <div
      id="about"
      className="flex flex-col px-16 md:px-32 flex-wrap text-center items-center justify-center text-black text-opacity-85 gap-16 md:flex  w-full h-dvh py-20"
    >
      <div className="text-5xl">{text}</div>
      {showExperiance && (
        <div className="w-full font-semibold font-serif">
          <div className="flex items-start justify-center gap-20 text-center text-xl">
            <div>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>Angular</li>
                <li>NextJS</li>
                <li>TypeScript</li>
                <li>.NET</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Agile</li>
                <li>Scrum</li>
                <li>Trello</li>
                <li>Jira</li>
                <li>Figma</li>
                <li>Discord</li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
