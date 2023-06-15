import React, { useEffect, useState } from 'react'
import Navbar from '../../Pages/Navbar/Navbar'
import "./quiz.css"
import quizzesData from '../../Hooks/Data'
import { useGloblaHook } from '../../Hooks/Context'
import { useParams } from 'react-router-dom'
const QuesAns = () => {
    const {isLoading,isError,getApidata,url} = useGloblaHook()

    const params = useParams();
    const id = params.id;   
    const [quizData, setquizData] = useState({})
    const {title,questionData} = quizData;
    let[indexnum, setindexNum] = useState(0)
    const [ans,setAns] = useState("");
    let [correct,setCorrect] = useState(0);
    const [name, setName] = useState("");
    const btnNext = ()=>{
        console.log(ans);
        console.log(questionData[indexnum].correct)
        if(ans===questionData[indexnum].correct){
            setCorrect(correct+1);
        }
        setindexNum(indexnum=indexnum+1)
        setAns("");
    }

    const prevBtnClick = ()=>{
        setindexNum(indexnum=indexnum-1)
    }

    useEffect(()=>{
        console.log(`${url}/allquizdata/${id}`)
        getApidata(`${url}/allquizdata/${id}`,setquizData);
    },[])

  return (
    <>
        <Navbar/>
        <div className="quiz">
            <h1 style={{color:"red"}}>{title}</h1>
        <div className="quiz-box">
            {questionData &&
                indexnum < questionData.length ? <>
                <h1 className='mb-2'>{questionData[indexnum].question}</h1>
                    <div className="opotion-all">
                       <p className={ans==="a"?'active':""} onClick={()=>{setAns("a")}}>{questionData[indexnum].a}</p>
                       <p className={ans==="b"?'active':""} onClick={()=>{setAns("b")}}>{questionData[indexnum].b}</p>
                       <p className={ans==="c"?'active':""} onClick={()=>{setAns("c")}}>{questionData[indexnum].c}</p>
                       <p className={ans==="d"?'active':""} onClick={()=>{setAns("d")}}>{questionData[indexnum].d}</p>
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