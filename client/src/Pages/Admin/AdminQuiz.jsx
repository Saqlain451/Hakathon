import React, { useState } from "react";
import { useGloblaHook } from "../../Hooks/Context";
import { ToastContainer } from 'react-toastify';
const AdminQuiz = () => {

  const {postApiFetch, url} = useGloblaHook();

  const [formData, setFormData] = useState({
    title: "",
    img: "",
    difficulty: "",
    questionData: [
      {
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: "",
      },
    ],
  });

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedQuestionData = [...formData.questionData];
    updatedQuestionData[index] = {
      ...updatedQuestionData[index],
      [name]: value,
    };
    setFormData({
      ...formData,
      questionData: updatedQuestionData,
    });
  };

  const handleAddQuestion = () => {
    setFormData({
      ...formData,
      questionData: [
        ...formData.questionData,
        {
          question: "",
          a: "",
          b: "",
          c: "",
          d: "",
          correct: "",
        },
      ],
    });
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    postApiFetch(`${url}/createQuiz`,formData)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Quiz Name:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />
        </div>
        <div className="url">
          <div>
            <label>Image URL:</label>
            <input
              type="text"
              name="img"
              value={formData.img}
              onChange={(e) =>
                setFormData({ ...formData, img: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label>Difficulty:</label>
            <select
              name="difficulty"
              value={formData.difficulty}
              onChange={(e) =>
                setFormData({ ...formData, difficulty: e.target.value })
              }
              required
            >
              <option value="">Select Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>
        <div>
          {formData.questionData.map((question, index) => (
            <div key={index}>
              <label>Question:</label>
              <input
                type="text"
                name="question"
                value={question.question}
                onChange={(e) => handleInputChange(e, index)}
                required
              />
              <div className="quiz-ans">
                <label>
                  Option A:
                  <input
                    type="text"
                    name="a"
                    value={question.a}
                    onChange={(e) => handleInputChange(e, index)}
                    required
                  />
                </label>
                <label>
                  Option B:
                  <input
                    type="text"
                    name="b"
                    value={question.b}
                    onChange={(e) => handleInputChange(e, index)}
                    required
                  />
                </label>
                <label>
                  Option C:
                  <input
                    type="text"
                    name="c"
                    value={question.c}
                    onChange={(e) => handleInputChange(e, index)}
                    required
                  />
                </label>
                <label>
                  Option D:
                  <input
                    type="text"
                    name="d"
                    value={question.d}
                    onChange={(e) => handleInputChange(e, index)}
                    required
                  />
                </label>
                <label>
                  Correct Answer:
                  <input
                    type="text"
                    name="correct"
                    value={question.correct}
                    onChange={(e) => handleInputChange(e, index)}
                    required
                  />
                </label>
              </div>
            </div>
          ))}
          <div className="admin-btns d-flex center g-2 mt-2">
            <button type="button" onClick={handleAddQuestion}>
              Add Question
            </button>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
      <ToastContainer/>
    </>
  );
};

export default AdminQuiz;
