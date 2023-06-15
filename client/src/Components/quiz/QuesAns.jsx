import React, { useState } from 'react'
import Navbar from '../../Pages/Navbar/Navbar'
import "./quiz.css"
import quizzesData from '../../Hooks/Data'
const QuesAns = () => {
    let[indexnum, setindexNum] = useState(0)
    const [ans,setAns] = useState("");
    let [correct,setCorrect] = useState(0);
    const [name, setName] = useState("");
    const btnNext = ()=>{
        console.log(ans);
        console.log(quizzesData[indexnum].correct)
        if(ans===quizzesData[indexnum].correct){
            setCorrect(correct+1);
        }
        setindexNum(indexnum=indexnum+1)
        setAns("");
    }

    const prevBtnClick = ()=>{
        setindexNum(indexnum=indexnum-1)
    }
    // console.log(ans);
    console.log(correct);
  return (
    <>
        <Navbar/>
        <div className="quiz">
            
        <div className="quiz-box">
            {
                indexnum < quizzesData.length ? <>
                <h1 className='mb-2'>{quizzesData[indexnum].question}</h1>
                    <div className="opotion-all">
                       <p className={ans==="a"?'active':""} onClick={()=>{setAns("a")}}>{quizzesData[indexnum].a}</p>
                       <p className={ans==="b"?'active':""} onClick={()=>{setAns("b")}}>{quizzesData[indexnum].b}</p>
                       <p className={ans==="c"?'active':""} onClick={()=>{setAns("c")}}>{quizzesData[indexnum].c}</p>
                       <p className={ans==="d"?'active':""} onClick={()=>{setAns("d")}}>{quizzesData[indexnum].d}</p>
            </div>
            <div className="d-flex center g-2">
                <button onClick={prevBtnClick}>Previous</button>
                <button onClick={btnNext}>Next</button>
            </div>
                </>:<>

                    <h1 className='text-center'>Your socre is {correct}</h1>
                    <input type="text" placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <button className='btn-save'>Save</button>
                </>
            }
            
        </div>
        </div>
    </>
  )
}

export default QuesAns