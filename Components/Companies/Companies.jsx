import React from 'react'
import Marquee from './Marquee';

const Companies = () => {
  return (
    <div className='w-full h-[25vh] tablet:h-[24vh]'>
        <div className='w-full flex justify-center items-center'>
        <h1 className='text-2xl font-semibold text-center pt-[3vw] w-1/ w-full mt-[8vw] md:w-2/3 px-2 '>High performing teams at companies worldwide build with kayzen</h1>
        </div>
        <Marquee/>
    </div>
  )
}

export default Companies;