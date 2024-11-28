import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from "./components/Auth/Login"
import EmpDash from './components/Dashbord/EmpDash'
import AdminDash from './components/Dashbord/AdminDash'
import setLocalItem, { getLocalItem } from './content/LocalStorage';
import { AuthContext } from './components/Auth/AuthContent'

function App() {
const [count, setCount] = useState(0);
const [user,setUser]=useState(null);
const[loggUserData,setLoggUserData]=useState('');
const [Data,setData]=useContext(AuthContext);

useEffect(() => {
  if(Data){
    console.log("data",Data)
      const logInUser=localStorage.getItem("logInUser");
      if(logInUser){
        setUser(logInUser.role)
      }
  }
},[Data])
     const HandlePage =(Email,password)=>{
        if (Email == 'admin.user@example.com' && password == 'adminPass123') {
          setUser('admin')
          localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
        }
        else if(Data) {
          const emp= Data.find(emp=>emp.email===Email && emp.password===password);
          if(emp){
            console.log("mill gya")
           setUser("employee")
           setLoggUserData(emp)
           localStorage.setItem("logInUser",JSON.stringify({role:"employee"}))
         }}
         else 
          {console.log("Wrong Infomation")  }
     }
  return (
    <>
       {!user?<Login HandlePage={HandlePage}/>:''} 
       {user=='admin'? <AdminDash  setUser={setUser}/> 
               :(user=='employee'?<EmpDash  
                                      userData={loggUserData} setUser={setUser}/>:null)}
    </>
  )}


export default App
