"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { BiSupport } from "react-icons/bi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CiRoute } from "react-icons/ci";
import { FaDatabase } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Beam } from "../featured/Beam";

gsap.registerPlugin(ScrollTrigger);

const BentoGrid = () => {
  const h1 = useRef(null);
  const h2 = useRef(null);

  // let tl = gsap.timeline({
  //   scrollTrigger:{
  //     trigger: '.start',
  //     start: '35% bottom',
  //     end: 'bottom top',
  //     // scrub: true,
  //     markers: true,
  //   },
  // })

  // useGSAP(()=>{
  //   tl.from(h1.current,{
  //     opacity: 0,
  //     duration: .4,
  //     y: 50,
  //     ease: 'power4.inOut'
  //   })
  //   tl.from(h2.current,{
  //     opacity: 0,
  //     duration: .4,
  //     y: 50,
  //     ease: 'power4.inOut'
  //   })
  // })

  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-4 tablet:grid-cols-2 tablet:grid-rows-3 px-[2vw] py-[2vw] w-full h-[135vh] tablet:h-[142vh] bg-[#F6F6F4]">
    {/* Box 1: Appointment Scheduling */}
    <div className="row-span-2 bg-white rounded-3xl p-8 shadow-lg flex flex-col items-center justify-center">
      <div className="w-full h-1/2">
        <Beam />
      </div>
      <div className="w-full h-1/2 flex flex-col justify-end items-start">
        <IoChatbubbles className="text-2xl mb-4" />
        <h2 className="text-xl font-bold mb-2 text-start capitalize">
          engineered for seamless integration
        </h2>
        <p className="text-base font-medium text-left">
          Equip your agents with advanced automation to authenticate callers and resolve issues seamlessly. Thoughtly integrates with your CRM, scheduling tools, and SaaS platforms, while effortlessly embedding chatbots on your website or app.
        </p>
      </div>
    </div>
  
    {/* Box 6: AI Personas */}
    <div className="bg-white row-span-1 col-span-2 tablet:col-span-1 rounded-3xl shadow-lg flex flex-col items-center justify-center">
      <img className="w-full h-[75%] object-contain object-center pt-10" src="../../images/5.png" alt="" />
      <div className="flex flex-col w-full items-start text-left pl-[6vw] relative top-[-40px]">
        <FaRegCalendarCheck className="text-4xl mb-4" />
        <h2 className="text-xl font-bold mb-2">Appointment Scheduling</h2>
        <p className="text-base font-medium">Sync with your calendar to schedule appointments seamlessly.</p>
      </div>
    </div>
  
    {/* Box 2: Lead Qualification */}
    <div className="call bg-white rounded-3xl p-8 shadow-lg flex flex-col items-center justify-center">
      <div className="w-full h-full flex flex-col justify-end items-start">
        <FaPhoneAlt className="text-4xl mb-4 ml-[2vw]" />
        <h2 className="text-xl font-bold mb-2 text-center">Call Routing</h2>
        <p className="text-base font-medium text-start">Route calls based on natural requests without hold times.</p>
      </div>
    </div>
  
    {/* Box 3: Call Routing */}
    <div className="analytics bg-white rounded-3xl p-8 shadow-lg flex flex-col col-span-2 tablet:col-span-2 relative">
      <img className="w-full h-[80%] object-contain" src="../../images/6.png" alt="" />
      <div className="flex flex-col items-end relative bottom-[50px]">
        <CiRoute className="text-4xl mb-4" />
        <h2 className="text-xl font-bold mb-2 text-right">Analytics & Reporting</h2>
        <p className="text-base font-medium text-right">Leverage analytics to optimize communication strategies.</p>
      </div>
    </div>
  
    {/* Box 4: Lead Generation Engine */}
    <div className="row-span-2 bg-white rounded-3xl p-8 shadow-lg flex flex-col gap-[6vw] items-center justify-center">
      <img className="w-full h-1/2 object-cover object-left" src="../../images/4.png" alt="" />
      <div className="flex flex-col items-center">
        <FaBookOpen className="text-4xl mb-4" />
        <h2 className="text-xl font-bold mb-2 text-center">Custom Knowledge base</h2>
        <p className="text-base font-medium text-center">Train your agent with custom data to improve over time.</p>
      </div>
    </div>
  
    {/* Box 5: 24/7 Availability */}
    <div className="availability bg-white rounded-3xl p-8 shadow-lg flex items-center justify-center col-span-2 tablet:col-span-1">
      <div className="flex flex-col items-start">
        <BiSupport className="text-4xl mb-4" />
        <h2 className="text-xl font-bold mb-2 text-start">24/7 Availability</h2>
        <p className="text-base font-medium text-start">Instant responses with trustworthy and accurate answers.</p>
      </div>
      <img className="w-1/2 h-full bg-cover" src="../../images/Service 24_7-bro.png" alt="" />
    </div>
  
    {/* Box 7: Multi-platform Chatbots */}
    <div className="col-span-1 ai-personas bg-white rounded-3xl p-8 shadow-lg flex flex-col items-center justify-center tablet:h-[306px]">
      <div className="w-full h-full flex flex-col justify-end items-start">
        <IoChatbubbles className="text-4xl mb-4" />
        <h2 className="text-xl font-bold mb-2 text-start">AI personas</h2>
        <p className="text-base font-medium text-start">Create engaging AI personas for a personalized user experience.</p>
      </div>
    </div>
  </div>
  
  );
};

export default BentoGrid;
