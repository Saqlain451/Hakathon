import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useGloblaHook } from '../../Hooks/Context';
const Cart = () => {
    const [projects, setProject] = useState([]);
    const {url} = useGloblaHook();
    useEffect(() => {
      const fetchFiles = async () => {
        try {
          const response = await axios.get(`${url}/files`);
          // setProject(response.data);
          setProject(response.data.success);
        } catch (error) {
          console.error('Error fetching files:', error);
        }
      };
  
      fetchFiles();
    }, []);
  
    const handleDownload = async (id) => {
      try {
        const response = await axios.get(`${url}/files/${id}`, {
          responseType: 'blob',
        });
  
        const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', 'file');
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(downloadUrl);
      } catch (error) {
        console.error('Error downloading file:', error);
      }
    };
  
  return (
    <div>
          <div>
      <h1>Uploaded Projects</h1>
      <div className="project-list">
        {projects.map((project) => (
          <div className="card" key={project._id}>
            <div className="card-body">
              <h5 className="card-title">Title:{project.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Author: {project.author}</h6>
              <p className="card-text">{project.description}</p>
              <button onClick={() => handleDownload(project._id)}>Download</button>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
  )
}

export default Cart
