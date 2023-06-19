import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import Fileupload from '../../Components/FileUpload/FileUpload';
import Cart from '../../Components/PorjCard/ProjCard';
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
    <Cart/>
   
    </>
    
  )
}

export default Project