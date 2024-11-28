import React from "react";
import Header from "../Others/Header";
import TaskCount from "../Others/TaskCount";
import TaskList from "../TaskLists/TaskList";

function EmpDash({userData,setUser}){
   return( <div className="w-full h-screen">
     <Header userData={userData} setUser={setUser}/>
     <div className=" flex h-[400px] w-full px-[15px] py-[20px] gap-[10px] items-center mt-[30px]">
     <TaskCount userData={userData}/>
     <TaskList userData={userData} />
     </div>
     </div>)

}
export default EmpDash;