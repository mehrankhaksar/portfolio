import React from "react";

import Image from "next/image";

import { RiLinksLine } from "react-icons/ri";

function Project({ image, createdWith, title, link }) {
  return (
    <div className="relative rounded-lg overflow-hidden group">
      <Image
        className="w-full h-full"
        src={image}
        width={500}
        height={500}
        alt="Project"
      />
      <div className="w-full h-full grid content-end absolute top-full left-0 text-2xl p-5 transition-all bg-gradient-to-b from-blue-400/80 to-gray-200/20 group-hover:top-0 sm:text-xl">
        <h5 className="text-lg font-semibold">{createdWith}</h5>
        <h4 className="font-bold mb-1.5">{title}</h4>
        <a
          className="w-fit text-white bg-blue-500 p-2.5 rounded-full transition-colors hover:bg-blue-600"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <RiLinksLine />
        </a>
      </div>
    </div>
  );
}

export default Project;
