import React from "react";

function TaskCount({userData}){
 return (<>
   <div className="w-1/2 h-[80%] flex justify-around flex-wrap mt-[15px] ">
         <div className=" w-[45%] h-[45%] bg-[#191973] rounded-xl px-[30px] py-[20px]">
            <h1 className="text-[35px] font-bold">{userData.TaskCount.new}</h1>
            <h1 className="text-[25px] font-bold">New Task</h1>
         </div>
         <div className=" w-[45%] h-[45%] bg-[#0047ab] rounded-xl px-[30px] py-[20px]">
         <h1  className="text-[35px] font-bold">{userData.TaskCount.accepted}</h1>
         <h1 className="text-[25px] font-bold">Accepted</h1>
         </div>
         <div className=" w-[45%] h-[45%] bg-[#5d75cb] rounded-xl px-[30px] py-[20px]">
         <h1 className="text-[35px] font-bold">{userData.TaskCount.completed}</h1>
         <h1 className="text-[25px] font-bold">Completed</h1>
         </div>
         <div className=" w-[45%] h-[45%] bg-[#002248] rounded-xl px-[30px] py-[20px]">
         <h1 className="text-[35px] font-bold">{userData.TaskCount.failed}</h1>
         <h1 className="text-[25px] font-bold">Failed</h1>
         </div>
   </div>
 </>)
}

export default TaskCount;