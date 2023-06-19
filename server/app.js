import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv'
import fs from "fs"
import path from 'path';
import fileUpload from "express-fileupload";
import mongoConnect from './db/Connection.js';
import userRouter from './Routes/userRoutes.js';
import quizRouter from './Routes/quizRoutes.js';
import marksRouter from './Routes/marksRouter.js';
import projectrouter from './Routes/projectrouter.js';

const app = express();
dotenv.config();

// const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(express.json())
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './tmp'
  }));
app.use(cors());
app.use(express.static('Upload'));
app.use(userRouter);
app.use(quizRouter)
app.use(marksRouter)
app.use(projectrouter);
const port = process.env.PORT
app.listen(port,()=>{
    console.log(`app is working at port ${port}`)
})