import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
const Project = () => {
const navigate = useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem("user")){
      navigate("/login");
    }
  },[navigate])
  return (
    <>
    
    <Navbar/>
    <div>Project</div>

   
    </>
    
  )
}

export default Project