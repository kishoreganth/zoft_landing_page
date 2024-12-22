'use client'
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Navbar = () => {

  const [isResourcesHovered, setIsResourcesHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const nav = useRef(null)




  // const dropdownVariants = {
  //   hidden: { opacity: 0, y: '20vw' },
  //   visible: { opacity: 1, y: 0 },
  // };

  // const arrowVariants = {
  //   initial: { rotate: 0 },
  //   rotated: { rotate: 180 },
  // };

  

  // useGSAP(()=>{
  //   gsap.from(nav.current, {
  //       y: -100,
  //       duration: 2,
  //       ease: 'power4.inOut',
  //       opacity: 0,
  //       delay: 1
  //   })
  // })

  return (
    <div ref={nav} className={`relative z-10 w-full  h-[10vh h-[7vh] ${isResourcesHovered || isContactHovered ? 'backdrop-blur-xl' : ''} shadow-md flex justify-between  items-center px-[6vw px-[4vw] md:px-[2vw] gap-[6vw`}>
      <div className="md:text-2xl  font-bold">kayzen</div>
      <div className="fle gap-4 web:gap-10 capitalize font-medium text-sm md:text-lg cursor-pointer hidden md:flex">
        {/* Resources Link */}
          <h3>features</h3>
          <h3>blog</h3>
          <h3>contact us</h3>
      </div>
      <div className='flex gap-[2vw] items-center '>
        <button className="md:px-4 px-2 py-1  md:py-2 bg-[#393E46] md:text-sm text-xs font-semibold capitalize rounded-lg text-white">sign in</button>
        <button className="md:px-4 px-2 py-1 md:py-2 bg-[#393E46] md:text-sm text-xs font-semibold capitalize rounded-lg text-white">book a demo</button>
      </div>
    </div>
  );
};

export default Navbar;


