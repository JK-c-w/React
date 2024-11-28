import React, { useEffect ,useContext } from "react";
 import { AuthContext } from '../Auth/AuthContent'
function AdminTaskList(){
  const [Data,setData]=useContext(AuthContext);
//  console.log("this is the Data:",Data)
    return(
        
        <div className="w-full p-[25px]">
         <div className="flex w-full justify-around mb-[5px] bg-[#4cb5f9] py-[5px] ">
          <div className="font-semibold uppercase text-center w-1/5">Employee Name</div>
          <div className="font-bold italic  text-center  w-1/5">Active Task</div>
          <div className="font-bold italic  text-center  w-1/5">New Task</div>
          <div className="font-bold italic  text-center  w-1/5">Completed </div>
          <div className="font-bold italic  text-center   w-1/5"> Failed</div>
        </div>
        {Data.map(function(emp,idx){
          return(
            <div className="flex w-full justify-around mb-[5px] bg-[#191973] py-[5px]" key={idx}>
            <div className="font-semibold uppercase  text-center  w-1/5">{emp.name}</div>
            <div className="font-bold italic  text-center  w-1/5"> {emp.TaskCount.accepted} </div>
            <div className="font-bold italic  text-center  w-1/5 ">{emp.TaskCount.new}</div>
            <div className="font-bold italic  text-center  w-1/5">{ emp.TaskCount.completed}</div>
            <div className="font-bold italic  text-center  w-1/5">{emp.TaskCount.failed}</div>
          </div>)
        })

     
        }
</div>
    )
}
export default AdminTaskList;