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

  

  useGSAP(()=>{
    gsap.from(nav.current, {
        y: -100,
        duration: 2,
        ease: 'power4.inOut',
        opacity: 0,
        delay: 1
    })
  })

  return (
    <div ref={nav} className={`relative z-10 w-full h-[10vh] ${isResourcesHovered || isContactHovered ? 'backdrop-blur-xl' : ''} shadow-md flex justify-between items-center px-[6vw] gap-[6vw]`}>
      <div className="text-2xl font-bold">kayzen</div>
      <div className="flex gap-10 capitalize font-medium text-sm cursor-pointer">
        {/* Resources Link */}
          <h3>features</h3>
          <h3>blog</h3>
          <h3>contact us</h3>
      </div>
      <div className='flex gap-[2vw] '>
        <button className="px-4 py-2 bg-[#393E46] font-semibold capitalize rounded-lg text-white">sign in</button>
        <button className="px-4 py-2 bg-[#393E46] font-semibold capitalize rounded-lg text-white">book a demo</button>
      </div>
    </div>
  );
};

export default Navbar;


