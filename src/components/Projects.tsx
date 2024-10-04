import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Weather Application",
      description: "Weather Application built using ReactJS",
      image:
        "https://cdn.pixabay.com/photo/2023/10/30/19/10/clouds-8353592_640.jpg",
      link: "https://weather-eta-ashy.vercel.app/",
    },
    {
      title: "E-commerce",
      description: "GitHub Repository of a NextJS E-commerce with WixStudio",
      image:
        "https://cdn.pixabay.com/photo/2018/08/29/17/07/ecommerce-3640321_1280.jpg",

      link: "https://github.com/IsakGunnardo/NextJS-E-commerce",
    },
    {
      title: "ChatGpt-Clone",
      description: "Chatgpt built using React,ExpressJS, MongoDB and GeminiAI",
      image: "/ardoAI.png",

      link: "https://github.com/IsakGunnardo/AI-Client.git",
    },
  ];
  return (
    <div
      id="projects"
      className="relative flex flex-col items-center justify-center border-b-2 gap-8 px-4 sm:px-8 md:px-16 lg:px-24 py-16 w-full min-h-screen"
    >
      <h1 className="text-2xl font-semibold text-ardo">Project Selection</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
