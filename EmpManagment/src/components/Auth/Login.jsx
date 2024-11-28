import React, { useState } from "react";

function Login({HandlePage}){
    let [Email,setEmail] =useState("");
    let [password,setPass]=useState("");

   let LoginDone=(e)=>{
        e.preventDefault();
        HandlePage(Email,password);
        // console.log(Email)
        setEmail("")
        setPass("");
      
   }

    return(
    <>
     <div className="flex w-full h-screen justify-around items-center ">
     <svg viewBox="0 0 24 24" fill="#4cb5f9" xmlns="http://www.w3.org/2000/svg" className="w-[400px] h-[400px] "><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 
                            6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 8C12.5523 8 13 8.44772 13 
                            9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8ZM12 12C13.6569 12 15 10.6569 
                            15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12ZM12 15C13.1046 15
                            14 15.8954 14 17H16C16 14.7909 14.2091 13 12 13C9.79086 13 8 14.7909 8 17H10C10 15.8954 10.8954 15 12 15Z"/></svg>
         
        <div className="w-[50%] h-[60%] border-2 border-[#4cb5f9] rounded-[10px] bg-[#4cb5f9] px-[50px] pt-[70px]">
            < form 
               onSubmit ={LoginDone} >

              {/* EMAIL ADDRESS   */}
             <input type="email" value={Email} 
               onChange={(e)=>{setEmail(e.target.value)}} 
               className="w-[100%] h-[45px] rounded-[10px] py-[1px] px-[20px] bg-[#4cb5f9] text-[25px] border-2 border-[white] outline-none font-bold" placeholder="email123@gmail.com"></input>
             
             {/* PASSWORD  */}
             <input type="password" value ={password}
              onChange={(e)=>setPass(e.target.value)}
              className="w-[100%] h-[45px] rounded-[10px] py-[1px] px-[20px] bg-[#4cb5f9] text-[25px] border-2 border-[white] outline-none my-[30px] font-bold" placeholder="password"></input>
             
             {/* LOGIN BUTTON */}
             <button type="submit"  className="w-[100%] h-[45px] bg-[black] text-[25px] uppercase font-bold" >Log in</button>
            </form>
         </div>
        
     </div>
    </>

)}

export default Login ;