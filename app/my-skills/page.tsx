"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="flex min-h-screen w-screen items-center justify-center bg-cover bg-center px-4 md:px-10 py-10"
    >
      <div className="flex flex-col gap-16 w-full max-w-[90%] text-center items-center">
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 mt-14 md:mt-0">
          <h1 className="font-semibold text-white text-[32px] md:text-[50px]">
            Skills{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              & Technologies
            </span>
          </h1>
          <p className="text-gray-400 text-[16px] md:text-[20px]">
            Using the latest tech this world has to offer
          </p>
        </div>

        {/* 📱 Grid for small screens (Mobile view only) */}
        <div className="grid grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-6 md:hidden">
          {SkillData.map((skill, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-2 transition-transform duration-300 active:scale-110"
            >
              <Image
                src={skill.Image}
                alt={skill.name}
                width={64}
                height={64}
                className="w-16 h-16 sm:w-20 sm:h-20"
              />
            </div>
          ))}
        </div>

        {/* 🖥️ Swiper for md+ screens only */}
        <div className="hidden md:block w-full max-w-[90%]">
          {/* First Swiper */}
          <Swiper
            breakpoints={{
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={5000}
            modules={[Autoplay]}
          >
            {SkillData.map((skill, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <Image
                  src={skill.Image}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.width}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Second Swiper */}
          <Swiper
            breakpoints={{
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            speed={5000}
            modules={[Autoplay]}
            className="mt-8"
          >
            {SkillData.map((skill, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <Image
                  src={skill.Image}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.width}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Page;
