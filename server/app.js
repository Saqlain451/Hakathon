import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv'
import mongoConnect from './db/Connection.js';
import userRouter from './Routes/userRoutes.js';
import quizRouter from './Routes/quizRoutes.js';
import marksRouter from './Routes/marksRouter.js';
const app = express();
dotenv.config();
app.use(express.json())
app.use(cors());
app.use(userRouter);
app.use(quizRouter)
app.use(marksRouter)
const port = process.env.PORT
app.listen(port,()=>{
    console.log(`app is working at port ${port}`)
})