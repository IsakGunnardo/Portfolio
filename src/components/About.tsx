"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Html5Original,
  Css3Original,
  JavascriptOriginal,
  ReactOriginalWordmark,
  NextjsOriginalWordmark,
  TypescriptOriginal,
  AngularOriginal,
  CsharpOriginal,
  DotnetcoreOriginal,
  FigmaOriginal,
  DiscordjsOriginalWordmark,
  VisualstudioOriginal,
  AzuresqldatabaseOriginal,
  MysqlOriginalWordmark,
  PostgresqlOriginalWordmark,
  DockerOriginalWordmark,
  TrelloOriginalWordmark,
  
} from "devicons-react";
import {  FaArrowRight} from "react-icons/fa";
interface Skill {
  icon: React.ElementType;
  name: string;
}

const About: React.FC = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showExperience, setShowExperience] = useState(false);
  const [inView, setInView] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [isSkipped, setIsSkipped] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const phrases = [
    "Who am I?",
    "My name is Isak Gunnardo",
    "I'm a Developer",
    "I got experience in frontend and backend-development",
    "Here is a list of",
    "Different Skills",
  ];

  const skills: Skill[] = [
    { icon: Html5Original, name: "HTML" },
    { icon: Css3Original, name: "CSS" },
    { icon: JavascriptOriginal, name: "JavaScript" },
    { icon: ReactOriginalWordmark, name: "ReactJS" },
    { icon: AngularOriginal, name: "AngularJS" },
    { icon: NextjsOriginalWordmark, name: "NextJS" },
    { icon: TypescriptOriginal, name: "TypeScript" },
    { icon: DotnetcoreOriginal, name: ".NET" },
    { icon: VisualstudioOriginal, name: "VSCODE" },
    { icon: AzuresqldatabaseOriginal, name: "AzureSQL" },
    { icon: MysqlOriginalWordmark, name: "MySQL" },
    { icon: PostgresqlOriginalWordmark, name: "PostgreSQL" },
    { icon: DockerOriginalWordmark, name: "DOCKER" },
    { icon: TrelloOriginalWordmark, name: "Trello" },
    { icon: FigmaOriginal, name: "Figma" },
    { icon: DiscordjsOriginalWordmark, name: "Discord" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
        if (loopNum === phrases.length - 1 || isSkipped) {
          setTimeout(() => {
            setShowExperience(true);
            setText("Diffrent Skills");
          }, 1500);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    if (!showExperience) {
      const timer = setTimeout(handleTyping, typingSpeed);
      return () => clearTimeout(timer);
    }
  }, [text, isDeleting, loopNum, showExperience]);

  useEffect(() => {
    if (showExperience) {
      const timer = setInterval(() => {
        setVisibleItems((prev: number[]) => {
          if (prev.length < skills.length) {
            return [...prev, prev.length];
          }
          clearInterval(timer);
          return prev;
        });
      }, 100);

      return () => clearInterval(timer);
    }
  }, [showExperience, skills.length]);

  const handleSkip = () => {
    setIsSkipped(true);
    setShowExperience(true);
    setLoopNum(phrases.length - 1);
    setText("Diffrent Skills");
  };
  return (
    <div
      ref={sectionRef}
      id="about"
      className="flex flex-col px-4 md:px-32 text-center items-center border-b-2 justify-center text-black text-opacity-85 gap-8 md:gap-16 w-full min-h-screen py-20"
    >
      <div className="text-4xl md:text-5xl font-bold mb-8 h-20">{text}</div>
      {!showExperience && (
        <button
          onClick={handleSkip}
          className="w-10 h-10 bg-yellow-500 text-2xl text-center flex items-center justify-center font-extrabold text-black rounded-full hover:bg-yellow-600 transition-all duration-300"
        >
          <FaArrowRight />
        </button>
      )}
      {showExperience && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md transition-all duration-500 ease-in-out ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-full"
              }`}
            >
              <skill.icon className="w-12 h-12 mb-2" />
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default About;
