import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect } from 'react'

function Intro({moveText}) {
  useGSAP(()=>{
      gsap.from('.dark-mode',{
         duration:1,
         opacity:0
      })
  })
  

  return (
    <div ref={moveText} className='w-1/2 px-[20px] mt-[60px]'>
        <span className=' font-extrabold h-fit tracking-tighter text-[black] text-[50px] uppercase '>I am 
             <span className='dark-mode text-[white]'> Dark Mode</span></span><br/>
        <span className=' h-fit leading-10 font-black text-[black] text-[100px] uppercase '>Designer</span><br/>
        <span className='h-fit leading-10 font-black text-[black] text-[50px] uppercase'>To Hire</span>
    </div>
  )
}

export default Intro;