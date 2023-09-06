import React from "react";

import Image from "next/image";

import {
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiGithubFill,
  RiDownloadLine,
  RiSkypeLine,
  RiWhatsappLine,
} from "react-icons/ri";

function Header() {
  return (
    <header className="relative z-50">
      <div className="w-full grid justify-items-center gap-5 sm:max-w-md sm:mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-fit p-1 border-4 border-solid border-blue-500 rounded-full">
            <Image
              className="rounded-full"
              src="/assets/images/Avatar.jpg"
              width={125}
              height={125}
              priority={true}
              loading="eager"
              alt="Avatar"
            />
          </div>
          <h3 className="text-2xl font-bold mt-2.5">Mehran Khaksar</h3>
          <span className="font-semibold">Front-End Developer</span>
        </div>
        <div className="flex items-center space-x-5">
          <a
            className="header-social-media"
            href="https://www.instagram.com/_mehraankh/"
            target="_blank"
            rel="noreferrer"
          >
            <RiInstagramLine />
          </a>
          <a
            className="header-social-media"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <RiLinkedinBoxFill />
          </a>
          <a
            className="header-social-media"
            href="https://github.com/mehrankhaksar"
            target="_blank"
            rel="noreferrer"
          >
            <RiGithubFill />
          </a>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <a
            className="col-span-2 flex justify-center items-center text-lg font-semibold text-white bg-blue-500 py-3 rounded shadow-md shadow-blue-500 transition-colors hover:bg-blue-600"
            href="/assets/pdf/Mehran Khaksar.pdf"
            download
          >
            Download CV
            <RiDownloadLine className="text-2xl ml-2.5" />
          </a>
          <div className="flex items-center space-x-1.5">
            <a
              className="header-contact-btn"
              href="https://join.skype.com/invite/AwknGUsJJQ9g"
              target="_blank"
              rel="noreferrer"
            >
              <RiSkypeLine />
            </a>
            <a
              className="header-contact-btn"
              href="https://wa.link/uq9grn"
              target="_blank"
              rel="noreferrer"
            >
              <RiWhatsappLine />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
