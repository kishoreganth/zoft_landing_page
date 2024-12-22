import React from 'react'
import Home from './Home/Home'
import Companies from './Companies/Companies'
import BentoGrid from './Bento/BentoGrid'
import Feature from './featured/Feature'

const Main = () => {
  return (
    <div className='w-full relative overflow- bg-[#F6F6F4]'>
        <Home/>
        <Companies/>
        <BentoGrid/>
        <Feature/>
    </div>
  )
}

export default Main