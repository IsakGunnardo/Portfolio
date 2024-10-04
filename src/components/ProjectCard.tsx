import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({
  title,
  description,
  link,
  image,
}: {
  title: string;
  description: string;
  link: string;
  image: any;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block no-underline"
    >
      <div className="max-w-xs max-h-xs h-[250px] rounded-lg overflow-scroll shadow-lg transition-transform transform hover:-translate-y-2 duration-300 cursor-pointer">
        <Image
          className="w-full h-36 object-cover"
          src={image}
          alt={title}
          width={400}
          height={400}
        />
        <div className="px-6 py-4">
          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
