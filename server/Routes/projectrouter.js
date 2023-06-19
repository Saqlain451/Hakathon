import express from 'express';
const projectrouter = new express.Router();
import { createProject,delProject,downloadProject,getProject } from '../Controller/projectController.js';

projectrouter.post("/upload",createProject);
projectrouter.get('/files',getProject);
projectrouter.delete('/files/:id',delProject);
projectrouter.get('/files/:id',downloadProject);

export default projectrouter;