import React, { useState , useEffect }  from "react";
import Accepted from "../TaskLists/Accepted";
import Failed from"../TaskLists/Failed";
import Completed from "../TaskLists/Completed";
import NewTask from "../TaskLists/NewTask";
function TaskList({userData}){
  console.log(userData)

  return (
    <div className="w-1/2 h-[100%] overflow-y-scroll no-scrollbar rounded" >
    {userData.tasks.map(function(task){
         if(task.active) return (<Accepted task={task}/>)
         else if(task.completed) return(<Completed task={task}/>) 
         else if(task.failed) return(<Failed task={task}/>)
          else return (<NewTask task={task}/>)  
     })}    
    </div> 

  )
}
export default TaskList;