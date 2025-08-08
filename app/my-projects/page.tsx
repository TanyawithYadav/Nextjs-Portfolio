import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/constants";
import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/Mountains.jpg)" }}
      className="w-screen min-h-screen bg-cover bg-center overflow-x-hidden"
    >
      {/* Scrollable only on mobile */}
      <div className="h-screen md:h-auto overflow-y-auto md:overflow-y-visible scrollbar-thin scrollbar-thumb-white/50 scrollbar-track-transparent px-3 pt-16 md:pt-0 pb-20 md:pb-0">
        {/* ↑ pt-16 for phone, pb-20 for extra scroll space */}

        {/* Center content */}
        <div className="flex flex-col items-center justify-center gap-4 min-h-screen">

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md text-center">
            My Projects
          </h1>

          {/* Projects Grid */}
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-4 mt-6 md:mt-4">
            {/* ↑ Reduced md:gap-x-4 to match vertical spacing */}
            {Projects.map((project, index) => (
              <div key={index} className="w-full">
                <ProjectCard
                  image={project.src}
                  title={project.title}
                  text={project.text}
                  codeLink={project.codeLink}
                  liveLink={project.liveLink}
                />
              </div>
            ))}
          </div>

          {/* GitHub Button */}
          <Link
            href="https://github.com/TanyawithYadav"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg group bg-transparent border border-white px-3 py-1.5 text-sm text-white mt-4 text-center hover:bg-white hover:text-black transition"
          >
            More on GitHub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
