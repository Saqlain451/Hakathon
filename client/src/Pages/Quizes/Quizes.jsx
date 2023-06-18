import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import CardQuiz from "../../Components/CardQuiz/CardQuiz";
import { useGloblaHook } from "../../Hooks/Context";
import { useNavigate } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
const Quizes = () => {
  const { getApidata, allQues, setAllQues, url, isLoading, isError,getApiPostData } =useGloblaHook();
  const navigate = useNavigate();
  const [btnState, setBtnState] = useState({
    all : true,
    easy : false,
    medium : false,
    hard : false
  })

  const lowerCase = (str)=>{
    return str.toLowerCase();
  } 

  const btnClickHandler =(e)=>{
    let  btnName = lowerCase (e.target.innerText);
    setBtnState({[btnName]:true})
    if(btnName == "all"){
      getApidata(`${url}/allquizdata`, setAllQues);
    }else{
      getApiPostData(`${url}/difficulty`,{difficulty:btnName})
    }
  }


  useEffect(() => {
    if (localStorage.getItem("user")) {
      getApidata(`${url}/allquizdata`, setAllQues);
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Navbar />
<div className="p-global">
<div className="d-flex p-5  g-2 admin-btns">
  <button className={btnState.all?"active-btns":""} onClick={btnClickHandler}>All</button>
  <button className={btnState.easy?"active-btns":""} onClick={btnClickHandler}>Easy</button>
  <button className={btnState.medium?"active-btns":""} onClick={btnClickHandler}>Medium</button>
  <button className={btnState.hard?"active-btns":""} onClick={btnClickHandler}>Hard</button>
</div>
{isLoading ? (
        <Loader/>
      ) : isError ? (
        <p className="error">No Quiz Found</p>
      ) : (
        <div className="grid-4">
          {allQues.length &&
            allQues.map((quiz) => {
              return (
                <CardQuiz
                  img={quiz.img}
                  title={quiz.title}
                  key={quiz._id}
                  marks={quiz.questionData.length}
                  path={`/quizes/${quiz._id}`}
                  difficulty={quiz.difficulty}
                />
              );
            })}
        </div>
      )}
</div>
      
    </>
  );
};

export default Quizes;
