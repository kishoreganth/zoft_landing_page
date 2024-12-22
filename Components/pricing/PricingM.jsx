'use client'
import React, {useRef, useEffect} from 'react'
import CTA from '../CTA'
import Globe from '../ui/globe';


const Pricing = () => {

  return (
    <div className='w-full h-screen  py-[2vw] rounded-xl '>
      <div className='w-full h-full relative flex flex-col gap-[1vw]'>
        <div className='w-full h-full flex flex-col justify-start items-start gap-[2vw] px-[2vw] pt-[8vw] '>
        <h1 className='text-5xl font-bold capitalize'>Be part of the communication evolution.</h1>
        <p className='text-lg font-medium capitalize '>Cut costs and elevate your customer experience. The generative AI revolution is here—stay ahead of the curve.</p>
        <CTA/>
        </div>
        <div className='w-full h-full'>
        {/* <Globe/> */}
        </div>
      </div>
    </div>
  )
}

export default Pricing