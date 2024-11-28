import React from 'react'

function Page4() {
  return (
    <div className='w-[100%] h-screen mt-[150px] px-[10px] '>
        <div className=' page4  flex w-[100%] h-[510px] rounded-3xl shadow-md shadow-[black]'>
            <div className=' w-1/2 h-[100%] px-[50px]'>
                <span className='text-[230px] leading-tight uppercase text-[#9B9B9B] font-[Font1] font-black'>what</span><br/>
                <span className='text-[230px] leading-[70px] uppercase text-[white] font-[Font1] font-black'>i do</span> <br/>
                <span className='font-black uppercase text-white'>Create | Design | Develope</span><br/>
                <span className='font-bold text-[white]'>websites that seamlessly bridge your goals with needs your client </span>
            </div>
            <div className='w-1/2 h-[100%] pt-[40px]  overflow-hidden'>
            </div>
        </div>
        <div className='w-[100%] flex  flex-col items-center w-[100%]  bg-[white] h-auto'>
           <div className='rotateX'> 
              <span  className=' text-[black] font-black leading-none font-[Font1] text-[500px] uppercase'>Helping</span>
           </div>  
           <div className='rotateX'>
              <span  className=' text-[#9B9B9B]  font-black leading-[300px] font-[Font1] text-[500px] uppercase'>my</span><br/>
           </div>   
           <div className='rotateX'>
              <span  className='text-[black] font-black leading-[450px] font-[Font1] text-[500px] uppercase'>clients</span><br/>
          </div>  
          <div className='rotateX'>
              <span  className='text-[#9B9B9B] font-black  leading-[350px] font-[Font1] text-[500px] uppercase'>to acheive</span><br/>
          </div>  
          <div className='rotateX'>
              <span  className=' text-[black] font-black leading-[450px] font-[Font1] text-[500px] uppercase'>their</span><br/>
          </div>  
          <div className='rotateX '>
              <span  className=' text-[#9B9B9B] font-black  leading-[300px] font-[Font1] text-[500px] uppercase'>Dreams!</span><br/>
          </div>  
        </div>
        <div className='w-[100%]  h-[510px] rounded-3xl mt-[60px] relative '>
         <video playsInline autoPlay muted loop className='w-[100%] h-[100%]  object-cover rounded-3xl  shadow-md shadow-[black] '>
            <source src='https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/480p/mp4/file.mp4' ></source>
         </video>
         <div className='rotateX absolute w-[40%] top-[5px] left-[50px]'>
              <span  className=' text-[white] font-black font-[Font1] text-[450px] uppercase'>ABOUT</span><br/>
          </div>          

        </div>

    </div>
  )
}

export default Page4;