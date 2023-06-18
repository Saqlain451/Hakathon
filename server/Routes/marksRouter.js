import express from 'express'
import { storeMarks,getMarks } from "../Controller/marksController.js";
const marksRouter = new express.Router();

marksRouter.post("/addNumber",storeMarks);
marksRouter.post("/getMarksQuiz",getMarks)

export default marksRouter;
