"use client";
import React, { useRef, useEffect } from "react";
import CTA from "../CTA";
// import Globe from '../ui/globe';
// import Globe from 'react-globe.gl';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
        // markers: true
      },
    });

    tl.to(mainRef.current, {
      y: "-=50%",
    });
    gsap.to(mainRef.current, {
      scrollTrigger: {
        trigger: mainRef.current,
        start: "30% center",
        end: "bottom top",
        scrub: true,
        // markers: true
      },
      scale: 0.9,
    });
  }, []);

  return (
    <div
      // ref={mainRef}
      className="w-full h-screen tablet:h-full  py-[2vw] rounded-xl "
    >
      <div className="w-full h-full relative flex gap-[1vw]">
        <div className="w-1/2 h-full flex flex-col justify-start items-start gap-[2vw] px-[2vw] pt-[8vw] ">
          <h1 className="text-8xl tablet:text-5xl font-bold capitalize">
            Be part of the communication evolution.
          </h1>
          <p className="text-lg font-medium capitalize mb-[12vw">
            Cut costs and elevate your customer experience. The generative AI
            revolution is here—stay ahead of the curve.
          </p>
          <CTA />
        </div>
        <div className="w-1/2 h-full pt-[8vw] ">
          {/* <Globe/> */}
          {/* <Globe/> */}
          <video
            className="w-[95%] h-[64%] object-cover bg-white p-8 rounded-2xl"
            autoPlay
            loop
            muted
            src="../../videos/pricingComp.mp4"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
