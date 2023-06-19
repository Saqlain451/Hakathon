import React, { useState } from 'react';
// import {Container, Row, Col, Form, FormGroup} from 'reactstrap';
import "./file.css";

import axios from 'axios'
import Dropzone from 'react-dropzone';
const Fileupload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [filepath, setfilepath] = useState(null);

    const handleFileDrop = (acceptedFiles) => {

        setfilepath(acceptedFiles[0]);
    };
  
    const handleFileUpload = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('author', author);
        formData.append('file', filepath);
    
  
      axios
        .post('http://localhost:4000/upload', formData)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
  
    

  return (
    <>
      <div style={{background:"blue"}}>
      <h1>Upload Project</h1>
      <form>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
    <div>
    
    <Dropzone onDrop={handleFileDrop}>
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          {filepath ? (
            <p>Selected file: {filepath.name}</p>
          ) : (
            <p>Drag and drop a file here, or click to select a file.</p>
          )}
       
        </div>
      
      )}
    </Dropzone>
    </div>
  
    <button onClick={handleFileUpload}>Upload</button>
    </form>
    </div>
  </>
  )
}

export default Fileupload
