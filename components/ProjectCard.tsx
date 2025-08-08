"use client";
import React, { useRef, useState } from "react";

interface Props {
  image: string;
  title: string;
  text: string;
  codeLink?: string;
  liveLink?: string;
}

const ProjectCard = ({ image, title, text, codeLink, liveLink }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMobileFlipped, setIsMobileFlipped] = useState(false);

  const handleTouch = () => {
    setIsMobileFlipped((prev) => !prev);
  };

  return (
    <div
      ref={cardRef}
      className="
        group 
        w-full 
        max-w-[350px] h-[220px]           /* Default size */
        lg:max-w-[320px] lg:h-[200px]     /* Laptop screens: smaller */
        perspective mx-auto
      "
      onTouchStart={handleTouch} // Enable flip on tap (mobile)
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isMobileFlipped ? "rotate-y-180" : "group-hover:rotate-y-180"
        }`}
      >
        {/* FRONT SIDE */}
        <div
          className="absolute w-full h-full backface-hidden rounded-lg overflow-hidden z-10"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full h-full group relative text-white p-3 rounded-lg">
            <div className="absolute bottom-3 right-3 text-lg font-semibold z-10 bg-black/60 text-white px-3 py-1 rounded-md shadow-md">
              {title}
            </div>

            <div className="absolute inset-0 w-full h-full bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
            <div className="absolute inset-0 w-full h-full text-[16px] pb-8 hidden group-hover:flex items-center justify-center z-20">
              Learn more &gt;
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div
          className="absolute w-full h-full backface-hidden rotate-y-180 z-20 rounded-lg overflow-hidden"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full h-full text-white p-3 relative">
            <div className="absolute inset-0 w-full h-full bg-black/40 backdrop-blur-sm z-[-1] rounded-lg" />

            <div className="flex flex-col justify-between h-full z-30">
              <div>
                <h1 className="text-left text-lg font-bold mb-1">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                    {title}
                  </span>
                </h1>

                <p className="text-gray-200 text-[15px] mt-2">{text}</p>
              </div>

              <div className="flex gap-3 mt-3">
                {codeLink && (
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[20px] bg-transparent border border-white px-4 py-2 text-sm text-white max-w-[100px] hover:bg-white hover:text-black transition duration-300"
                  >
                    Code
                  </a>
                )}
                {liveLink && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[20px] bg-transparent border border-white px-4 py-2 text-sm text-white max-w-[100px] hover:bg-white hover:text-black transition duration-300"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
