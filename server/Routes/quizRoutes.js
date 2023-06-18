import express from 'express';
import { createQuiz,allQuiz,indiVidualQuizData,diffiCulty } from '../Controller/quizController.js';
const quizRouter = new express.Router();

// create quiz
quizRouter.post("/createQuiz",createQuiz);

// get all quizes

quizRouter.get("/allquizdata",allQuiz);

// get only one data by using id
quizRouter.get("/allquizdata/:id",indiVidualQuizData);

// filter out by difficulty --->

quizRouter.post("/difficulty",diffiCulty);

export default quizRouter;