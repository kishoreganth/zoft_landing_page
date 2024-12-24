"use client";
import React, { useRef, forwardRef, useEffect } from "react";
import AnimatedTextLoop from "./AnimatedTextLoop";
import { gsap, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useScreenSize from "../ScreenSize";

gsap.registerPlugin(ScrollTrigger);

const Feature = () => {
  const screenWidth = useScreenSize();
  const scaleRef = useRef(null);
  const photoRef = useRef(null);
  const photoRef2 = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  return (
    <div className="w-full md:h-[180vh] tablet:h-[140vh] h-[300vh] relative px-[1vw] py-[1vw]">
      <h1 className="text text-4xl tablet:text-4xl md:text-6xl capitalize font-medium w-full md:w-1/2 md:ml-[4vw] pt-[3vw] px-3">
        let&apos;s put your front office on autopilot, here&apos;s how
      </h1>

      {/* Card Section */}
      <div className="w-full mt-[2vw] px-[3vw] py-[1vw] flex flex-col tablet:flex-row web:flex-row gap-[2vw]">
        <div className="w-full h-full tablet:h-[55%] px-[2vw]  pt-[4vw] flex flex-col gap-[2vw] rounded-lg shadow-2xl">
          <h1 className="text-2xl font-bold capitalize">
            Tell zoft your use case
          </h1>
          <p className="text-sm font-semibold capitalize tablet:h-[138px] web:h-[70px]">
            Need a hand with sales, customer support, operations, or building
            something custom? Just tell Zoft what to do, and we’ll take care
            of the rest.
          </p>
          <img
            className="w-full h-[240px] tablet:h-[180px] mb-2 object-center object-cover rounded-lg"
            src="../../images/optino1.png"
            alt="Option 1"
          />
        </div>
        <div className="w-full h-full tablet:h-[55%] px-[2vw]  pt-[4vw] flex flex-col gap-[2vw] rounded-lg shadow-2xl">
          <h1 className="text-2xl font-bold capitalize">
            Choose voice and language
          </h1>
          <p className="text-sm font-semibold capitalize tablet:h-[138px] web:h-[70px]">
            Zoft Ai delivers quick, emotional responses in chats and calls
            while managing multiple actions.
          </p>
          <img
            className="w-full h-[240px] tablet:h-[180px] mb-2 object-center object-cover rounded-lg"
            src="../../images/option2.png"
            alt="Option 2"
          />
        </div>
        <div className="w-full h-full tablet:h-[55%] px-[2vw]  pt-[4vw] flex flex-col gap-[2vw] rounded-lg shadow-2xl">
          <h1 className="text-2xl font-bold capitalize">Custom Knowledge</h1>
          <p className="text-sm font-semibold capitalize tablet:h-[138px] web:h-[70px]">
            Train it like an employee! Create a pathway for natural
            conversations. With our guardrails, it responds intelligently to
            anything—no hallucinations.
          </p>
          <img
            className="w-full h-[240px] tablet:h-[180px] mb-2 object-center object-cover rounded-lg"
            src="../../images/You are (3).png"
            alt="Option 3"
          />
        </div>
      </div>

      {/* Full-width Scaling Section */}
      {screenWidth < 768 ? (
        <div
          ref={scaleRef}
          className="w-full  h-[150vh] bg-[#473434] mt-[2vw] overflow-visible"
        >
          <div className="px-6 relative rounded-3xl w-full h-full  flex items-center overflow-visible">
            {/* Content Section */}
            <div className="w-full h-full flex flex-col ">
              <div className="h-full w-full flex items-end left">
                <div
                  ref={leftRef}
                  className="left fade-in w-full h-full flex flex-col justify-center items-center gap-[2vw] "
                >
                  <h1 className="text-2xl capitalize font-bold text-white mb-2">
                    redefining customer connections.
                  </h1>
                  <video
                    className="w-[80%] h-[80%] tablet:h-[70%] object-cover rounded-3xl"
                    autoPlay
                    loop
                    muted
                    src="../../videos/chatbot2.mp4"
                  ></video>
                </div>
              </div>
              <div
                ref={rightRef}
                className="right fade-in w-full h-full flex flex-col justify-center items-end gap-[10vw] "
              >
                <div className="w-full h-[25vh] relative z-30 ml-[12vw] mb-[12vw] flex-shrink-0 flex justify-center gap-6 overflow-visible">
                  <div
                    ref={photoRef}
                    className="photo opacity-1 w-1/2 h-full rounded-xl overflow-hidden"
                  >
                    <img
                      className="w-full h-full object-cover"
                      src="../../images/female.jpg"
                      alt="Female"
                    />
                  </div>
                  <div
                    ref={photoRef2}
                    className="photo opacity-1 w-1/2 h-full rounded-xl overflow-hidden"
                  >
                    <img
                      className="w-full h-full object-cover"
                      src="../../images/male.jpg"
                      alt="Male"
                    />
                  </div>
                </div>
                <AnimatedTextLoop />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          ref={scaleRef}
          className="w-full  h-[80vh] web:h-[90vh] bg-[#473434] mt-[2vw] overflow-visible"
        >
          <div className="px-6 relative rounded-3xl w-full h-full  flex items-center overflow-visible">
            {/* Content Section */}
            <div className="w-full h-full flex ">
              <div className="h-full w-1/3 tablet:w-5/12 flex items-end left">
                <div
                  ref={leftRef}
                  className="left fade-in w-full h-full flex flex-col justify-center items-center gap-[2vw] "
                >
                  <h1 className="text-2xl capitalize font-bold text-white">
                    redefining customer connections.
                  </h1>
                  <video
                    className="w-[100%] web:w-[80%] h-[80%] object-cover tablet:object-fill rounded-3xl"
                    autoPlay
                    loop
                    muted
                    src="../../videos/chatbot2.mp4"
                  ></video>
                </div>
              </div>
              <div
                ref={rightRef}
                className="right fade-in w-2/3 tablet:w-7/12 h-full flex flex-col justify-center items-end gap-[10vw] "
              >
                <div className="w-[30vw] tablet:w-[50vw] h-[25vh] tablet:h-[18vh] relative z-30 ml-[12vw] flex-shrink-0 flex justify-center gap-6 overflow-visible">
                  <div
                    ref={photoRef}
                    className="photo opacity-1 w-1/3 h-full rounded-xl overflow-hidden"
                  >
                    <img
                      className="w-full h-full object-cover"
                      src="../../images/female.jpg"
                      alt="Female"
                    />
                  </div>
                  <div
                    ref={photoRef2}
                    className="photo opacity-1 w-1/3 h-full rounded-xl overflow-hidden"
                  >
                    <img
                      className="w-full h-full object-cover"
                      src="../../images/male.jpg"
                      alt="Male"
                    />
                  </div>
                </div>
                <AnimatedTextLoop />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feature;
