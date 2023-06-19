import React, { useState } from "react";
// import {Container, Row, Col, Form, FormGroup} from 'reactstrap';
import "./file.css";

import axios from "axios";
import Dropzone from "react-dropzone";
import { useGloblaHook } from "../../Hooks/Context";
const Fileupload = () => {
  const {url} = useGloblaHook();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [filepath, setfilepath] = useState(null);

  const handleFileDrop = (acceptedFiles) => {
    setfilepath(acceptedFiles[0]);
  };

  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("author", author);
    formData.append("file", filepath);

    axios
      .post(`${url}/upload`, formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };


  return (
    <>
      <div className="file-upload p-global">
        <form>
          <div className="upload-box">
            <Dropzone onDrop={handleFileDrop}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                  {filepath ? (
                    <div className="upload-box-icon">
                        <img src="./assets/file.png" alt="" />
                        <p>Selected file: {filepath.name}</p>
                    </div>
                   
                  ) : (
                    <div className="upload-box-icon">
                        <img src="./assets/file.png" alt="" />
                        <p>Drag and drop a file here, or click to select a file.</p>
                    </div>
                    
                  )}
                </div>
              )}
            </Dropzone>
          </div>
          <div className="grid-2 g-2 mt-2">
            <div>
              <label>Title:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
          </div>

          <div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write something about your project"
            />
          </div>

          <div></div>

          <button onClick={handleFileUpload}>Upload</button>
        </form>
      </div>
    </>
  );
};

export default Fileupload;
