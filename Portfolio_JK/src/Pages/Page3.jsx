import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

function Page3() {
    gsap.registerPlugin(ScrollTrigger);  
  useGSAP(()=>{
       gsap.to('.line1',{
          width:"70%",
          delay:0.4,
          scrollTrigger:{
          trigger:'.line1',
          scrub:2
          }
       })
       gsap.to('.line2',{
        width:"80%",
        delay:0.4,
        scrollTrigger:{
        trigger:'.line1',
        scrub:2
        }
     })
     gsap.to('.line3',{
        width:"90%",
        delay:0.4,
        scrollTrigger:{
        trigger:'.line1',
        scrub:2
        }
     })
  },[])

  return (
    <div className='w-[100%] h-screen' >
    <div className='w-[100%] pt-[40px] flex justify-center   '>
         <div className='bg-[black] w-[40%] h-[2px]'></div>
    </div>
    <div className='w-[100%] relative mt-[130px]'>
       <div className='w-[100%] absolute z-1'>
          <div className='line1 w-[0%] bg-[black] h-[2px] mt-[100px] absolute left-[50%] translate-x-[-50%] '></div>
          <div className='line2  w-[0%] bg-[black]  h-[2px] mt-[200px] absolute left-[50%] translate-x-[-50%]'></div>
          <div className='line3  w-[0%] bg-[black]  h-[2px] mt-[300px] absolute left-[50%] translate-x-[-50%]'></div>
      </div>    
      <div className='w-[65%] h-[400px] absolute z-2  left-[50%] translate-x-[-50%] translate-y-[-10%]'>
        <img  src='https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_889,h_511,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png'></img>
      </div>
      <div className='w-[546px] h-[338px] absolute z-3  left-[50%] translate-x-[-50%] translate-y-[-6px] '>
        <video className='w-[100%] h-[100%] absolute  z-3 object-cover'playsInline autoPlay loop muted>
            <source src="https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/360p/mp4/file.mp4" type="video/mp4"></source>
        </video>
      </div>
   </div>
    </div>
  )
}

export default Page3
