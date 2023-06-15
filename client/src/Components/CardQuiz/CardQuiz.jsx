import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";
const CardQuiz = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img
            src="https://th.bing.com/th/id/OIP.2Udcw9OILll_iFokftNKBQHaDt?w=287&h=175&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt=""
          />
        </div>
        <div className="card-content">
          <h1 className="mb-2">Html quiz</h1>
          <div className="d-flex mb-2 space-between">
            <p>Marks : 10</p>
            <p>ques : 10</p>
          </div>
          <button className="btn-start" onClick={()=>{navigate("/quizes/quiz")}}>Take test</button>
        </div>
      </div>
    </>
  );
};

export default CardQuiz;
