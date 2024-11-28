import React from "react";
// import setLocalItem from './content/LocalStorage';

function Header({userData,setUser}){
  const logOut=()=>{
    //  console.log("logg krdo")
     setUser('')
     localStorage.setItem("logInUser",JSON.stringify({role:""}))
  }
 return (<>
   <div className=" w-full  flex  items-center justify-between px-[10%] ">
        <div >
            <h2 className="text-[20px] mt-[10px] text-[#4cb5f9]">Hello,</h2>
            <h1 className="text-[38px] font-bold text-[#4cb5f9] leading-10">{userData.name} 🙌</h1>
        </div>
        {/* <div className="text-[30px] italic uppercase font-bold underline"> Your DashBord</div> */}
        <button  onClick={logOut}
        className=" w-[7vw] h-[5vh] mt-[35px] bg-[#f20d02]  font-semibold rounded-[3px]">LOG OUT</button>
   </div>
 </>)
}
export default Header ;