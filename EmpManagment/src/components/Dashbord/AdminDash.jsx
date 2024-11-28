import React, { useContext, useEffect, useState } from "react";
// import AdminHeader from "../Others/AdminHeader";
import AdminTaskList from "../Others/AdminTaskList";
import Header from "../Others/Header";
import { AuthContext } from '../Auth/AuthContent'
import AdminHeader from "../Others/AdminHeader";
import Completed from "../TaskLists/Completed";

function AdminDash({setUser}){
  
  const[newTask,setNewTask]=useState({})
   let [title,setTitle]=useState(""); 
   let [date,setDate ] =useState("");
   let[AssignTo,setAssgin] =useState("");
   let[category,setCategory] =useState("");
   let[description,setDesc]=useState("");
   const[userData,setData]=useContext(AuthContext);


   const submit=(e)=>{
  e.preventDefault();
  setNewTask({title,date,category,description,active:false,completed:false,failed:false,newTask:true})
  console.log(newTask.title)

   console.log("submit");
   console.log("title:",title)
   const employee =userData ;
   employee.forEach((emp,idx) => {
       if(emp.name === AssignTo){
        //  console.log(newTask)
          emp.tasks.push(JSON.stringify(newTask))
          emp.TaskCount.new=1+emp.TaskCount.new
       }
   });
   setData(employee)
  //  console.log("hello")
   setTitle("");
   setDate("");
  setAssgin("");
  setCategory("");
  setDesc("");
   }


  return(
    <div className="w-full h-screen">
         {/* Header */}
         <AdminHeader  setUser={setUser}/>
       {/* create Task */}
       <form 
       onSubmit={submit}> 
         <div className="w-full px-[50px]  flex justify-around mt-[5%]">
             <div className="w-1/2  flex flex-col gap-[10px]">
                <div>
                  <h2 className="font-semibold text-[#6b6b6b]">Task Title</h2>
                  <input type="text" className="w-[70%] rounded p-[5px] border-2 border-[#4cb5f9] bg-[transparent]  font-semibold outline-none"
                    value={title}
                     onChange={(e)=>{
                      setTitle(e.target.value)
                      }} ></input>
                </div>
                <div>
                  <h2 className="font-semibold text-[#6b6b6b]">Date</h2>
                  <input type="Date" className="w-[70%] rounded p-[5px] border-2 border-[#4cb5f9] bg-[transparent]  font-semibold outline-none"
                    value={date} 
                    onChange={(e)=>{
                      setDate(e.target.value)
                      }} ></input>
                </div>
                <div>
                  <h2 className="font-semibold text-[#6b6b6b]">Assign To</h2>
                  <input type="text" className="w-[70%] rounded p-[5px] border-2 border-[#4cb5f9] bg-[transparent]  font-semibold outline-none"
                  value={AssignTo} 
                  onChange={(e)=>{
                    setAssgin(e.target.value)
                    }} ></input>
                </div>
                <div>
                  <h2 className="font-semibold text-[#6b6b6b]">Category</h2>
                  <input type="text" className="w-[70%] rounded p-[5px] border-2 border-[#4cb5f9] bg-[transparent]  font-semibold outline-none"
                  value={category} 
                  onChange={(e)=>{
                    setCategory(e.target.value)
                    }} ></input>
                </div>
             </div>
             <div className="w-[50%]  ">
                 <div className="p-[5px] ">
                    <h2 className="font-semibold text-[#6b6b6b]" >Description</h2>
                    <textarea rows={8}  className="  w-[90%] h-[90%] border-2 border-[#4cb5f9] bg-[transparent] rounded p-[10px] font-semibold outline-none"
                    value={description} 
                    onChange={(e)=>{
                      setDesc(e.target.value)
                      }}></textarea><br></br>
                    <button type="submit" className="font-semibold text-[#6b6b6b] w-[90%]  bg-[#4cb5f9] rounded text-[20px] text-[white]">Create Task</button>
                 </div>
                 
             </div>
         </div>
        </form>
        {/* Task List */}
       <AdminTaskList />
        
    </div>
  )


}
export default AdminDash;