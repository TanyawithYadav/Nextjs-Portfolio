// app/page.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [stars, setStars] = useState<JSX.Element[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const starElements = [...Array(10)].map((_, i) => {
      const delay = Math.random() * 5;
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight * 0.5;
      const endX = startX + 300;
      const endY = startY + 300;

      return (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: startX, y: startY, scale: 1 }}
          animate={{ opacity: [0, 1, 0], x: endX, y: endY, scale: [1, 0.2] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay,
            repeatDelay: 2 + Math.random() * 3,
          }}
          className="absolute w-[4px] h-[4px] bg-white rounded-full shadow-white"
        />
      );
    });

    setStars(starElements);
  }, []);

  return (
    <main className="w-screen h-screen relative overflow-hidden">
      {/* Hero Section */}
      <div
        className="
          flex min-h-screen bg-cover bg-center 
          flex-col items-center justify-center 
          md:flex-row md:items-center md:justify-start
        "
        style={{ backgroundImage: "url('/main-bg.webp')" }}
      >
        {/* Content */}
        <div className="pl-6 pr-6 pt-10 md:pl-40 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[36px] md:text-[50px] text-white font-semibold leading-tight text-center md:text-left">
            Make anything possible with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}Web Development
            </span>
          </h1>

          <p className="text-gray-200 text-center md:text-left">
            Hi, I'm 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}Tanya Yadav
            </span> – a full-stack web wizard from Lucknow, blending creativity with code!
            Currently crafting beautiful React interfaces and building powerful backend systems.
            From leading tech teams to deploying full-stack apps – I make ideas come alive on the web! 
            Let’s build something amazing together.
          </p>

          {/* Desktop Buttons */}
          <div className="hidden md:flex flex-row gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My Projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contact me
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-5 md:hidden mt-5 items-center">
            <Link
              href="/my-skills"
              className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px] text-center"
            >
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px] text-center"
            >
              My Projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px] text-center"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>

      {/* Cliff + Horse */}
      <div className="absolute bottom-0 right-0 hidden md:block lg:translate-y-6">
        {/* Cliff behind */}
        <Image
          src="/cliff.webp"
          alt="cliff"
          width={500}
          height={500}
          className="relative z-10 lg:translate-y-28"
        />
        {/* Horse above */}
        <Image
          src="/horse.png"
          alt="horse"
          width={380}
          height={380}
          className="absolute bottom-[265px] right-[160px] z-20 scale-110 lg:translate-y-4"
          unoptimized
        />
      </div>

      {/* Static Stars */}
      <Image
        src="/stars.png"
        alt="stars"
        width={300}
        height={300}
        className="absolute top-0 left-0 z-[1]"
        unoptimized
      />
      <Image
        src="/stars.png"
        alt="stars"
        width={300}
        height={300}
        className="absolute top-10 right-10 z-[1] opacity-80"
        unoptimized
      />
      <Image
        src="/stars.png"
        alt="stars"
        width={250}
        height={250}
        className="absolute top-20 left-[40%] z-[1] opacity-60"
        unoptimized
      />
      <Image
        src="/stars.png"
        alt="stars"
        width={200}
        height={200}
        className="absolute top-[30%] left-[70%] z-[1] opacity-70"
        unoptimized
      />

      {/* Shooting Stars (Hydration Safe) */}
      {mounted && (
        <div className="z-[15] absolute w-full h-full pointer-events-none">
          {stars}
        </div>
      )}
    </main>
  );
}
