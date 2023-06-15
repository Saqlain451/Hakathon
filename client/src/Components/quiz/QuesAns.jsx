import React from 'react'
import Navbar from '../../Pages/Navbar/Navbar'

const QuesAns = () => {
  return (
    <>
        <Navbar/>
        <div className="quiz-box">
            <h1>the question goes here</h1>
            <div className="opotion-all">
                <p>option 1</p>
                <p>option 2</p>
                <p>option 3</p>
                <p>option 4</p>
            </div>
            <div className="quiz-btns">
                <button>Previous</button>
                <button>Next</button>
            </div>
        </div>
    </>
  )
}

export default QuesAns