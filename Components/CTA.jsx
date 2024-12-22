"use client";
import React from "react";
import ShineBorder from "./ui/shine-border";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import AnimatedShinyText from "./ui/animated-shiny-text";

const CTA = () => {
  return (
    <div className="lg:w-2/3 w-[90%] h-20 sm:h-[10vh] flex justify-center lg:pl-[1.3vw] py-[.5vw] items-center bg-gray-100">
      <ShineBorder
        className="relative flex h-14 sm:h-[4vw] lg:w-full w-[80%]  items-center justify-center  rounded-xl"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        // borderRadius="1rem"
        // borderWidth="3px"
        // duration="2s"
      >
        <div className="relative w-full h-full ">
          <label htmlFor="email-input" className="sr-only">
            Work Email
          </label>
          <input
            id="email-input"
            type="email"
            placeholder="What is your work email ?"
            className="w-full h-full pl-1 pr-[120px] py-3 rounded-2xl text-sm md:text-lg bg-white border-none focus:outline-none"
          />
          <button className="absolute flex text-sm tablet:text-base items-center gap-[.2vw] h-[1vh]  top-1/2 right-2 transform -translate-y-1/2 rounded-lg group capitalize bg-[#393E46] text-white lg:px-[1vw] px-[2vw] lg:py-[1.5vw] py-[4vw] md:py-[3vw] hover:bg-black transition-all duration-300 ease-in-out">
            get started
            <ArrowRightIcon className="size-4 group-hover:translate-x-[5px] transition-all duration-300 ease-in-out" />
          </button>
        </div>
      </ShineBorder>
    </div>
  );
};

export default CTA;
