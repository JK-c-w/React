import React, { useEffect } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// gsap.registerPlugin(useGSAP);

function Bottom() {
   useGSAP(()=>{
      let tl=gsap.timeline();   
      tl.from('.content',{
            y:'150px',
            opacity:0,
            duration:0.8
      })
       tl.from('.rotateImg',{
            rotate:'360 deg',
            repeat:-1,
            duration:4,
            ease:2
       })
   })       

  return (
        <div className=' absolute bottom-[20px] w-[100%] px-[50px] py-[10px] overflow-hidden'>
           <div className=' flex w-[100%] h-1/2  justify-end py-[20px]'>
                <img className=" rotateImg w-[60px]" src='https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png'></img>
           </div>
           <div className=' w-[100%] h-1/2 flex justify-between overflow-hidden'>
                 <h3 className='content uppercase font-black tracking-tight text-[15px]'>Website Design | App Design <br /><span className='font-light '>BESPOKE FREELANCE </span></h3>
                 <img className=' rotateImg w-[60px]' src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png"></img>
           </div>
        </div>
  )
}

export default Bottom ;