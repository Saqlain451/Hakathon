import express from 'express';
import { createUser,checkLogin } from '../Controller/UserController.js';

const userRouter = new express.Router();
userRouter.post("/register", createUser);
userRouter.post("/login", checkLogin)

export default userRouter;
