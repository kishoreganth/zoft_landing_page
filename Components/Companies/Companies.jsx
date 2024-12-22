import React from 'react'
import Marquee from './Marquee';

const Companies = () => {
  return (
    <div className='w-full h-[50vh]'>
        <div className='w-full flex justify-center items-center'>
        <h1 className='text-2xl font-semibold text-center pt-[3vw] w-1/4  '>High performing teams at companies worldwide build with kayzen</h1>
        </div>
        <Marquee/>
    </div>
  )
}

export default Companies;