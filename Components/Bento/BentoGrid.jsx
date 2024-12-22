'use client'
import React, {useRef} from 'react'
import Image from 'next/image'
import { BiSupport } from "react-icons/bi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CiRoute } from "react-icons/ci";
import { FaDatabase } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const BentoGrid = () => {
  const h1 = useRef(null)
  const h2 = useRef(null)

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
    <div className="grid grid-cols-4 grid-rows-3 gap-4 px-[2vw] py-[2vw] h-[135vh] bg-[#F6F6F4] ">

      {/* Box 1: Appointment Scheduling - spans 2 rows */}
      <div className="row-span-2 bg-white rounded-lg p-8 shadow-lg flex flex-col items-center justify-center">
      <FaRegCalendarCheck className="text-4xl mb-4" />
      <h2 className="text-2xl font-bold mb-2 text-center">Appointment Scheduling</h2>
      <p className="text-lg font-medium text-center">
      Sync with your calendar to schedule appointments seamlessly.
      </p>
    </div>

       {/* Box 6: AI Personas */}
       <div className="bg-white row-span-1 col-span-2 rounded-lg p-8 shadow-lg flex flex-col items-center justify-center">
      <IoChatbubbles className="text-4xl mb-4" />
      <h2 className="text-2xl font-bold mb-2 text-center">AI Personas</h2>
      <p className="text-lg font-medium text-center">
      Create engaging AI personas for a personalized user experience.
      </p>
    </div>

    {/* Box 2: Lead Qualification */}
    <div className="bg-white  rounded-lg p-8 shadow-lg flex flex-col items-center justify-center">
      <FaPhoneAlt className="text-4xl mb-4" />
      <h2 className="text-2xl font-bold mb-2 text-center">Lead Qualification</h2>
      <p className="text-lg font-medium text-center">
      Qualify leads and route them to the right contact effortlessly.
      </p>
    </div>

    {/* Box 3: Call Routing */}
    <div className="bg-white rounded-lg p-8 shadow-lg flex flex-col items-center justify-center col-span-2 ">
      <CiRoute className="text-4xl mb-4" />
      <h2 className="text-2xl font-bold mb-2 text-center">Call Routing</h2>
      <p className="text-lg font-medium text-center">
      Route calls based on natural requests without hold times.
      </p>
      <button className=' px-[2vw] py-[1vh] rounded-xl border-black border-[1px] capitalize font-semibold text-md mt-[1vw] '>see it in action</button>
    </div>

    {/* Box 4: Lead Generation Engine - spans 2 rows */}
    <div className="row-span-2 bg-white rounded-lg p-8 shadow-lg flex flex-col items-center justify-center">
      <FaBookOpen className="text-4xl mb-4" />
      <h2 className="text-2xl font-bold mb-2 text-center">Custom Knowledge base</h2>
      <p className="text-lg font-medium text-center">
      Train your agent with custom data to improve over time.
      </p>
    </div>

    {/* Box 5: 24/7 Availability */}
    <div className="bg-white rounded-lg p-8 shadow-lg flex flex-col items-center justify-center col-span-2">
      <BiSupport className="text-4xl mb-4" />
      <h2 className="text-2xl font-bold mb-2 text-center">24/7 Availability</h2>
      <p className="text-lg font-medium text-center">
      Instant responses with trustworthy and accurate answers.
      </p>
      <button className=' px-[2vw] py-[1vh] rounded-xl border-black border-[1px] capitalize font-semibold text-md mt-[1vw] '>learn more</button>
    </div>

 

    {/* Box 7: Multi-platform Chatbots - spans 2 columns */}
    <div className="col-span-1   bg-white rounded-lg p-8 shadow-lg flex flex-col items-center justify-center">
      <FaGlobe className="text-4xl mb-4" />
      <h2 className="text-2xl font-bold mb-2 text-center">Multi-platform Chatbots</h2>
      <p className="text-lg font-medium text-center">
        Engage users on multiple platforms with consistent support across all channels.
      </p>
    </div>
  </div>


  )
}

export default BentoGrid