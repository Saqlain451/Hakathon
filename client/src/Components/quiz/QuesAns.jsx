import React, { useEffect, useState } from 'react'
import Navbar from '../../Pages/Navbar/Navbar'
import "./quiz.css"
import quizzesData from '../../Hooks/Data'
import { useGloblaHook } from '../../Hooks/Context'
import {useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { ToastContainer } from 'react-toastify'
const QuesAns = () => {
    const { isLoading, isError, getApidata, url,postApiFetch,getApiPostData } = useGloblaHook()

    const params = useParams();
    const id = params.id;
    const [quizData, setquizData] = useState({}) //set all the data of quiz
    const { title, questionData,difficulty } = quizData;
    let [indexnum, setindexNum] = useState(0)
    const [ans, setAns] = useState("");
    let [correct, setCorrect] = useState(0);
    const [name, setName] = useState("");
    const [isMarks, setisMarks] = useState(false)
    const [allMarks, setAllMarks] = useState([])


    const userDetails = JSON.parse(localStorage.getItem("user"));
    const email = userDetails.email
    const userName = userDetails.name;
    // console.log(userName)
    const btnNext = () => {
        console.log(ans);
        console.log(questionData[indexnum].correct)
        if (ans === questionData[indexnum].correct) {
            setCorrect(correct + 1);
        }
        setindexNum(indexnum = indexnum + 1)
        setAns("");
    }

    const prevBtnClick = () => {
        setindexNum(indexnum = indexnum - 1)
    }

    const saveHandler =()=>{
        postApiFetch(`${url}/addNumber`,{name:userName,title,email,difficulty,mark:correct,totalMarks:questionData.length})
    }

    const getResultHandler = ()=>{
        setisMarks(true)
        getApiPostData(`${url}/getMarksQuiz`,{name,title,email,difficulty}, setAllMarks);

    }

    useEffect(() => {
        getApidata(`${url}/allquizdata/${id}`, setquizData);
    }, [])

    return (
        <>
            <Navbar />

            <div className="quiz">
                {isLoading ? <Loader/> : isError ? <p>No Question answer found</p>  : <>
                    
                    <div className="quiz-box">
                    <h1 className='text-center text-green mb-2'>{title}</h1>
                        {questionData &&
                            indexnum < questionData.length ? <>
                            <h1 className='mb-2'>{questionData[indexnum].question}</h1>
                            <div className="opotion-all">
                                <p className={ans === "a" ? 'active' : ""} onClick={() => { setAns("a") }}>{questionData[indexnum].a}</p>
                                <p className={ans === "b" ? 'active' : ""} onClick={() => { setAns("b") }}>{questionData[indexnum].b}</p>
                                <p className={ans === "c" ? 'active' : ""} onClick={() => { setAns("c") }}>{questionData[indexnum].c}</p>
                                <p className={ans === "d" ? 'active' : ""} onClick={() => { setAns("d") }}>{questionData[indexnum].d}</p>
                            </div>
                            <div className="d-flex center g-2">
                                <button onClick={prevBtnClick}>Previous</button>
                                <button onClick={btnNext}>Next</button>
                            </div>
                        </> : <>

                            <h1 className='text-center'>Your socre is {correct}</h1>
                            <input type="text" required placeholder='Name' value={name} onChange={(e) => { setName(e.target.value) }} />
                            <div className="d-flex center g-2">
                            <button className='btn-save' onClick={saveHandler}>Save</button>
                            <button className='btn-save' onClick={getResultHandler}> All Result </button>
                            </div>
                        </>
                        }

                    </div>
                </>}

                {isMarks && 
                <div className='question-all-marks'>
                
                <div className="all-result" style={{background:"rgb(0, 255, 200)"}}>
                    <p style={{color:"black"}}>Name</p>
                    <p style={{color:"black"}}>tilte</p>
                    <p style={{color:"black"}}>difficulty</p>
                    <p style={{color:"black"}}>marks</p>
                    <p style={{color:"black"}}>total marks</p>
                </div>
                
                {
                    allMarks.map((ele)=>{
                        return(
                        <div className="all-result" key={ele._id}>
                            <p>{ele.name}</p>
                            <p>{ele.title}</p>
                            <p>{ele.difficulty}</p>
                            <p>{ele.mark}</p>
                            <p>{ele.totalMarks}</p>
                        </div>
                        )
                        
                    })
                } 

                </div>
                
                
                
                }

            

            </div>


            

            <ToastContainer/>
        </>
    )
}

export default QuesAns