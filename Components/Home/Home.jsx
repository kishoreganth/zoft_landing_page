import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'


const Home = () => {
  return (
    <div className='w-full h-screen relative overflow-hidden bg-[#F6F6F4]'>
        <Navbar />
        <Hero/>
    </div>
  )
}

export default Home;