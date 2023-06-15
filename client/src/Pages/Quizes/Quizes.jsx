import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import CardQuiz from "../../Components/CardQuiz/CardQuiz";
import { useGloblaHook } from "../../Hooks/Context";
import { useNavigate } from "react-router-dom";
const Quizes = () => {
  const { getApidata, allQues, setAllQues, url, isLoading, isError } =
    useGloblaHook();
  const navigate = useNavigate();

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

      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>No Quiz Found</p>
      ) : (
        <div className="grid-4 p-global">
          {allQues.length &&
            allQues.map((quiz) => {
              // console.log(quiz);
              return (
                <CardQuiz
                  img={quiz.img}
                  title={quiz.title}
                  quescount={quiz.questionData.length}
                  key={quiz._id}
                  marks={quiz.questionData.length}
                  path={`/quizes/${quiz._id}`}
                />
              );
            })}
        </div>
      )}
    </>
  );
};

export default Quizes;
