import React from 'react'
import { useGloblaHook } from './Hooks/Context'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import Project from './Pages/Projects/Project';
import Quizes from './Pages/Quizes/Quizes';
import Register from './Pages/Register/Register';
import Navbar from './Pages/Navbar/Navbar';
import QuesAns from './Components/quiz/QuesAns';
import CaseStudy from './Pages/CaseStudy/CaseStudy';
import Admin from './Pages/Admin/Admin';

const App = () => {
  return (
    <>
       <BrowserRouter>
       
        <Routes>
          <Route index element={<Project/>} />
          {/* <Route path='/projects' element={<Project/>}/> */}
          <Route path='/quizes' element={<Quizes/>}/>
          <Route path='/quizes/:id' element={<QuesAns/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/casestudy' element={<CaseStudy/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App