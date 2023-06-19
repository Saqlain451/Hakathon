import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import Fileupload from '../../Components/FileUpload/FileUpload';
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
    <Fileupload/>
   
    </>
    
  )
}

export default Project