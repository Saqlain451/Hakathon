import { Project } from "../Model/ProjectSchema.js";
import fs from 'fs';

const createProject = async (req, res) => {
    try {
      if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ message: 'No file uploaded' });
      }
  
      // Access the uploaded file
      const file = req.files;
      console.log(file)
      const filename=req.files.file.name
      // Save file details to the database
      const project =  new Project({
           
             author:req.body.author,
              title:req.body.title,
              description:req.body.description,
              image:req.body.image,
              data: fs.readFileSync(file.file.tempFilePath),
              mimeType: file.file.mimetype,
              filepath:filename
             
          });
            await project.save();
        
  
      // Move the file to the uploads directory
      file.file.mv('./Upload/'+filename, (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Error uploading file' });
        }
        res.status(201).json({ message: 'File uploaded successfully' });
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
    // console.log(req)
  }


 // Get all files endpoint

  const getProject = async (req, res) => {
    try {
      const files = await Project.find().sort('-createdAt');
      
      res.status(201).json({success :files });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ err: 'Server error' });
    }
  }

  const delProject = async (req, res) => {
    try {
      const file = await Project.findByIdAndDelete(req.params.id);
      if (!file) {
        return res.status(404).json({ message: 'File not found' });
      }
  
      // Delete the file from the database and the filesystem
      // await file.remove();
      return res.json({ message: 'File deleted successfully' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
  }


  const downloadProject = (req, res) => {
    console.log(req.params.id)
    Project.findById(req.params.id)
  
      .then((file) => {
        if (!file) {
          return res.status(404).json({ message: 'File not found' });
        }
  
        res.set('Content-Type', file.mimeType);
        res.send(file.data);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      });
  }


  export {createProject,delProject,downloadProject,getProject}