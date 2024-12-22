"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CTA from "../CTA";
import useScreenSize from "../ScreenSize";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const screenWidth = useScreenSize();

  const hero = useRef(null);

  // useGSAP(()=>{
  // gsap.from(hero.current, {
  //     y: '100vh',
  //     opacity: 0,
  //     duration: 1,
  //     delay: .5,
  //     ease: 'power4.inOut'
  // })
  // })

  return (
    <div
      ref={hero}
      className=" h-full tablet:h-[110vh] w-full relative flex flex-col web:flex-row overflow-hidden px-3"
    >
      <div className="h-1/2  w-full pl-[5vw] md:py-[3vw] py-[4vw] flex flex-col gap-[3vw] web:gap-[2vw] ">
        <h1 className="lg:text-8xl text-4xl  tablet:text-5xl font-medium capitalize">
          effortless communications, with ai chat and phone agents.
        </h1>
        <h6 className="lg:text-2xl text-lg text-zinc-400 lg:w-2/3 w-[90%]">
          kayzen helps business build and deploy human-like AI enterprise agents
          in 1 minute to automate chat and calls.
        </h6>
        <CTA />
      </div>

      {screenWidth < 768 ? (
        <div className="h-[120%]  w-full bg-[#FDFDFD flex  flex-col overflow-hidden">
          <div className="w-full  h-full flex overflow-hidden gap-2">
            <div className="w-1/2 flex flex-col gap-4 items-end">
              <div className="w-[80%] tablet:w-[80%] overflow-hidden rounded-3xl mt-6">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  src="../../videos/hero1.mp4"
                ></video>
              </div>

              <div className="w-full overflow-hidden rounded-3xl">
                <video
                  className="w-full h-full object-"
                  autoPlay
                  loop
                  muted
                  src="../../videos/hero3.mp4"
                ></video>
              </div>
            </div>
            <div className="w-1/2 h-[90%] -mt-[3vw overflow-hidden">
              <div className="w-full h-full overflow-hidden rounded-3xl">
                <video
                  className="w-full h-full object-"
                  autoPlay
                  loop
                  muted
                  src="../../videos/hero2.mp4"
                ></video>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full w-full bg-[#FDFDFD flex flex-col overflow-hidden pt-2">
          <div className="w-full  h-full flex overflow-hidden">
            <div className="h-full w-1/2 flex flex-col gap-4 web:gap-10 items-end mt-6">
              <div className="w-[80%] h-[45%] overflow-hidden rounded-3xl">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  src="../../videos/hero1.mp4"
                ></video>
              </div>

              <div className="w-full overflow-hidden rounded-3xl">
                <video
                  className="w-full h-full object-"
                  autoPlay
                  loop
                  muted
                  src="../../videos/hero3.mp4"
                ></video>
              </div>
            </div>
            <div className="w-1/2 h-[90%] -mt-[3vw overflow-hidden">
              <div className="w-full h-full overflow-hidden rounded-3xl">
                <video
                  className="w-full h-full object-"
                  autoPlay
                  loop
                  muted
                  src="../../videos/hero2.mp4"
                ></video>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
