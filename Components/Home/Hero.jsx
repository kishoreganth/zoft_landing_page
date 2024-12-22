'use client'
import React, {useRef} from 'react'
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import CTA from '../CTA';

gsap.registerPlugin(useGSAP);




const Hero = () => {
const hero = useRef(null)


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
    <div ref={hero} className=' h-full w-full relative flex'>
        <div className='h-full w-1/2 pl-[5vw] py-[3vw] flex flex-col gap-[1vw] '>
        <h1 className='text-8xl font-medium capitalize'>effortless communications, with ai chat and phone agents.</h1>
        <h6 className='text-2xl text-zinc-400 w-2/3'>kayzen helps business build and deploy human-like AI enterprise agents in 1 minute to automate chat and calls.</h6>
        <CTA/>
        </div>
        <div className='h-full w-1/2 bg-[#FDFDFD] border flex  flex-col'>

       <div className='w-full h-1/2 flex justify-between items-center'>
       <div className=' w-1/3 h-full'>
       <video className='w-full h-[70%] object-center object-cover' autoPlay loop muted src="../../videos/hero1.mp4"></video>
       </div>
       <div className=' w-1/2 h-full py-[1vw]'>
       <video className='w-full h-[100%] ' autoPlay loop muted src="../../videos/hero2.mp4"></video>
       </div>
       </div>

       <div className='w-full h-1/2 '>
       <video className='w-full h-[70%] object-center object-cover' autoPlay loop muted src="../../videos/hero3.mp4"></video>
       </div>
        </div>
    </div>
  )
}

export default Hero