import React from 'react'
import Navbar from '../Navbar/Navbar'
import CardQuiz from '../../Components/CardQuiz/CardQuiz'

const Quizes = () => {
  return (
    <>
    <Navbar/>
    <div className='grid-4 p-global'>
      <CardQuiz/>
      <CardQuiz/>
      <CardQuiz/>
      <CardQuiz/>
    </div>
    </>
    
  )
}

export default Quizes