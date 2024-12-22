import React from 'react'

const Feature = () => {
  return (
    <div className='w-full h-[200vh]  relative px-[1vw] py-[1vw]'>
      <h1 className='text text-6xl capitalize font-medium w-1/2 ml-[4vw] pt-[3vw]'>let&apos;s put your front office on autopilot, here&apos;s how </h1>

      <div className='w-full h-[60vh] mt-[2vw] px-[1vw] py-[1vw] flex gap-[2vw]  '>
        <div className='w-1/3 h-full  px-[2vw] py-[4vw] flex flex-col gap-[2vw] rounded-lg shadow-xl '>
        <h1 className='text-2xl font-bold capitalize '>Tell Kayzen your use case</h1>
        <p className='text-sm font-semibold capitalize'>Need a hand with sales, customer support, operations, or building something custom? Just tell Kayzen what to do, and we’ll take care of the rest.</p>
        </div>
        <div className='w-1/3 h-full  px-[2vw] py-[4vw] flex flex-col gap-[2vw] rounded-lg shadow-xl  '>
        <h1 className='text-2xl font-bold capitalize '>Choose voice and language</h1>
        <p className='text-sm font-semibold capitalize'>Kayzen Ai delivers quick, emotional responses in chats and calls while managing multiple actions.</p>
        </div>
        <div className='w-1/3 h-full  px-[2vw] py-[4vw] flex flex-col gap-[2vw] rounded-lg shadow-xl  '>
        <h1 className='text-2xl font-bold capitalize '>Custom Knowledge</h1>
        <p className='text-sm font-semibold capitalize'>rain it like an employee! Create a pathway for natural conversations. With our guardrails, it responds intelligently to anything—no hallucinations.</p>
        </div>
      </div>

      <div className='w-full h-[30vh]  mt-[2vw] px-[1vw] py-[1vw] rounded-lg shadow-xl  '>
        <div className='w-full h-full '>
          <div className='w-1/2 h-full  px-[2vw] py-[2vw] flex flex-col gap-[2vw]'>
          <h1 className='text-2xl font-bold capitalize '>Integrate your tools with ease.</h1>
          <p className='text-sm font-semibold capitalize'> Looking to route to a human? Set up a meeting? Send AI-driven texts? Update your CRM? Just insert your tool into the mix!</p>
          </div>
        </div>
      </div>

      <div className='w-full h-[80vh] bg-green-200 mt-[2vw] '></div>
    </div>
  )
}

export default Feature