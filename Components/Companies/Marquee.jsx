'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Marquee = () => {
  return (
    <div className="marquee-container overflow-hidden">
      <div className="relative h-[80%] w-full pt-[5vw] flex items-center flex-nowrap whitespace-nowrap">
        <motion.div
          className="flex items-center"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
        >
          {/* Add actual image sources here */}
          <img src="../../images/Coca-Cola-Logo-PNG-Pic.png" alt="Company 1" style={{ width: '14vw', height: '10vh' }} className="mx-4" />
          <img src="../../images/Coca-Cola-Logo-PNG-Pic.png" alt="Company 2" style={{ width: '14vw', height: '10vh' }} className="mx-4" />
          <img src="../../images/Coca-Cola-Logo-PNG-Pic.png" alt="Company 3" style={{ width: '14vw', height: '10vh' }} className="mx-4" />
          <img src="../../images/Coca-Cola-Logo-PNG-Pic.png" alt="Company 4" style={{ width: '14vw', height: '10vh' }} className="mx-4" />
          <img src="../../images/Coca-Cola-Logo-PNG-Pic.png" alt="Company 5" style={{ width: '14vw', height: '10vh' }} className="mx-4" />
          {/* Duplicate images for seamless loop */}
          <img src="../../images/Coca-Cola-Logo-PNG-Pic.png" alt="Company 1" style={{ width: '14vw', height: '10vh' }} className="mx-4" />
          <img src="../../images/Coca-Cola-Logo-PNG-Pic.png" alt="Company 2" style={{ width: '14vw', height: '10vh' }} className="mx-4" />
          <img src="../../images/Coca-Cola-Logo-PNG-Pic.png" alt="Company 3" style={{ width: '14vw', height: '10vh' }} className="mx-4" />
          <img src="../../images/Coca-Cola-Logo-PNG-Pic.png" alt="Company 4" style={{ width: '14vw', height: '10vh' }} className="mx-4" />
          <img src="../../images/Coca-Cola-Logo-PNG-Pic.png" alt="Company 5" style={{ width: '14vw', height: '10vh' }} className="mx-4" />
        </motion.div>
      </div>
    </div>
  )
}

export default Marquee
