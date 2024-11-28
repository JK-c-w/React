import React from 'react'

function Accepted({task}) {
  return (
    <>
    <div className="w-[full] min-h-[150px] mb-[10px] bg-[#0047ab] py-[8px] px-[15px] rounded mt-[-5px]">
         <div className="w-full flex justify-between ">
           <h3 className="rounded font-semibold min-w-[50px] text-center text-[black]">{task.category}</h3>
           <h3 className="font-bold ">{task.date}</h3>    
         </div> 
         <h2 className="text-[25px] font-semibold mt-[5px]">{task.title}</h2>
         <h4 className="text-[15px] font-semibold mt-[5px]">{task.description}</h4>
         <div>
         <div className='w-full flex items-center gap-[5px]'>
         <button className="px-[3px] bg-[green] font-semibold rounded">Done</button>
         <button className="px-[3px] bg-[red] font-semibold rounded">Failed</button>
         </div> 
         </div>       
    </div>
    </>
  )
}

export default Accepted;