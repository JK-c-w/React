import React from "react";

function AdminHeader({setUser}){

   let logout=()=>{
      localStorage.setItem('logInUser','');
      setUser('');
   }


    return(
        <div className="w-1/2 flex px-[15px] py-[15px] items-center gap-[20px] ">
        <div className="w-[10vh]">
        <svg viewBox="0 0 24 24" fill="#4cb5f9" xmlns="http://www.w3.org/2000/svg">
               <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 
               22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 
               20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 
               4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM12 
               11H16V13H12V16L8 12L12 8V11Z" /></svg>
        </div>
        <h1 className="text-[10vh]  text-[#6b6b6b] italic font-bold underline">Create Task</h1>
        <button className=" w-[7vw] h-[5vh] mt-[35px] bg-[#f20d02] font-semibold rounded-[3px]" onClick={logout}>LOG OUT</button>

    </div>
    )
}
export default AdminHeader;