import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import "./admin.css"
import AdminProject from './AdminProject'
import AdminQuiz from './AdminQuiz'
import AdminCase from './AdminCase'
import { useNavigate } from 'react-router-dom'
const Admin = () => {

    const [btnState, setBtnState] = useState({
        Quiz : true,
        Project : false,
        "Case Study" : false
    })

    const btnClickHandler = (e)=>{
        const name = e.target.innerText;
        console.log(name);
        setBtnState({[name] : true})
    }

  const navigate = useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem("user")){
      navigate("/login")
    }
  },[])

  return (
    <>
     <Navbar/>
     <div className="p-global">
        <div className="admin-btns d-flex g-2 center">
        <button className={btnState.Quiz? "active-btns" : ""} onClick={btnClickHandler}>Quiz</button>
        <button className={btnState.Project? "active-btns" : ""} onClick={btnClickHandler}>Project</button>
        <button className={btnState['Case Study']? "active-btns" : ""} onClick={btnClickHandler}>Case Study</button>
        </div>
        <div className="admin-content p-5">
          {btnState.Quiz && <AdminQuiz/>} 
          {btnState.Project && <AdminProject/>} 
          {btnState['Case Study'] && <AdminCase/>}
        </div>
    
        
     </div>
    </>
   
  )
}

export default Admin