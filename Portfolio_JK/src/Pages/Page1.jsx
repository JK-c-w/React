import React, { useRef, useState } from 'react'
import Header from '../Components/Header';
import Bottom from '../Components/Bottom';
import Intro from '../Components/Intro';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Page1() {

let [xVal,setX]=useState(0);
let [yVal,setY]=useState(0);
let moveText=useRef();
let mouseMove=(e)=>{
    setX((e.clientX-moveText.current.getBoundingClientRect().x
              -moveText.current.getBoundingClientRect().width)/15);  
  
    setY((e.clientY-moveText.current.getBoundingClientRect().y
    -moveText.current.getBoundingClientRect().height)/15);
  }  // moveText.current.style.transform =`rotateX(${yVal}deg) rotateY(${xVal}deg)`;   
 useGSAP(()=>{
    gsap.to(moveText.current,{
       transform:`rotateX(${yVal}deg) rotateY(${xVal}deg)`,
       duration:3,
       ease:'elastic.out(1,0.3)'
    })
 },[xVal,yVal])


  return (
     <div className='w-[100%] h-screen bg-[white] px-[20px] py-[10px] relative'>
       <div  id='page1' onMouseMove={(e)=>{
         mouseMove(e)
       }}
        className=' w-[100%] h-[100%] bg-[#C2C2C2] rounded-[40px]  shadow shadow-[black]'>
           {/* TEXTMOVING */}
           <Header/>
           <Intro moveText={moveText}/>
          <Bottom/>
       </div>
     </div>
  )
}

export default Page1;