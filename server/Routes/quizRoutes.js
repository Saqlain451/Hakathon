import express from 'express';
import { createQuiz,allQuiz,indiVidualQuizData } from '../Controller/quizController.js';
const quizRouter = new express.Router();

// create quiz
quizRouter.post("/createQuiz",createQuiz);

// get all quizes

quizRouter.get("/allquizdata",allQuiz);

// get only one data by using id
quizRouter.get("/allquizdata/:id",indiVidualQuizData);

export default quizRouter;