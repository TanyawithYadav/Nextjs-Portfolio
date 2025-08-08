"use client";
import React from "react";
import Image from "next/image";
import { Socials } from "@/constants";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[80px] md:h-[100px] bg-transparent flex justify-between items-center px-4 sm:px-6 md:px-20 md:-mt-2">
      {/* Logo + Name */}
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="relative">
          <Image
            src="/horseLogo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain rounded-full"
          />
        </div>
        <h1 className="text-white text-[18px] sm:text-[22px] md:text-[25px] font-semibold">
          Tanya Yadav
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500"></span>
        </h1>
      </div>

      {/* Social Icons */}
      <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 items-center">
        {Socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={social.src}
              alt={social.name}
              width={24}
              height={24}
              className="hover:scale-110 transition-transform duration-200 sm:w-[26px] sm:h-[26px] md:w-[28px] md:h-[28px]"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
