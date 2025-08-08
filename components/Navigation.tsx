"use client";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition";

const Navigation = () => {
  const [isClient, setIsClient] = useState(false);
  const [isRouting, setIsRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [path, isRouting]);

  if (!isClient) {
    // Render static nav links without dynamic active styles before hydration
    return (
      <div
        style={{ left: "5%" }}
        className="absolute z-[50] -bottom-20 w-[90%] md:w-[20%] max-h-[150px] rounded-full flex justify-between items-center border bg-black border-white px-4 py-7"
      >
        {NavLinks.map((nav) => (
          <Link
            key={nav.name}
            href={nav.link}
            className="mb-16 pl-4 min-w-[20%]"
          >
            <nav.icon className="w-[24px] h-[24px] text-white" />
          </Link>
        ))}
      </div>
    );
  }

  return (
    <>
      {/* Keep transition separate so it doesn't affect layout */}
      {isRouting && <Transition />}

      <div
        style={{ left: "5%" }}
        className="absolute z-[50] -bottom-20 w-[90%] md:w-[20%] max-h-[150px] rounded-full flex justify-between items-center border bg-black border-white px-4 py-7"
      >
        {NavLinks.map((nav) => (
          <Link
            key={nav.name}
            href={nav.link}
            className="mb-16 pl-4 min-w-[20%]"
          >
            <nav.icon
              className={`w-[24px] h-[24px] ${
                path === nav.name ? "text-purple-800" : "text-white"
              }`}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navigation;
