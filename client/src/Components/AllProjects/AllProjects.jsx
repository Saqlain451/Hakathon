import React, { useEffect } from 'react'
import Navbar from '../../Pages/Navbar/Navbar'
import Cart from '../PorjCard/ProjCard'
import { useNavigate } from 'react-router-dom'

const AllProjects = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem("user")){
      navigate("/login")
    }
  },[])
  return (
    <>
        <Navbar/>
        <Cart/>
    </>
  )
}

export default AllProjects