import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";
const CardQuiz = ({img,title,marks,quescount,path,difficulty}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img
            src={img}
            alt="quiz img"
          />
        </div>
        <div className="card-content">
          <h1 className="mb-2">{title}</h1>
          <div className="d-flex mb-2 space-between">
            <p>Marks : {marks}</p>
            <p>Difficulty : {difficulty}</p>
          </div>
          <button className="btn-start" onClick={()=>{navigate(path)}}>Take test</button>
        </div>
      </div>
    </>
  );
};

export default CardQuiz;
