import React, { useState, useEffect } from "react";
import axios from "axios";
import { useGloblaHook } from "../../Hooks/Context";
import { HiDownload } from "react-icons/hi";
const Cart = () => {
  const [projects, setProject] = useState([]);
  const { url } = useGloblaHook();
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get(`${url}/files`);
        // setProject(response.data);
        setProject(response.data.success);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    fetchFiles();
  }, []);

  const handleDownload = async (id) => {
    try {
      const response = await axios.get(`${url}/files/${id}`, {
        responseType: "blob",
      });

      const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", "file");
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <>
      <div className="p-global">
        <h1
          style={{
            fontSize: "3rem",
            color: "var(--text-green)",
            textAlign: "center",
          }}
        >
          Uploaded Projects
        </h1>
        <div className="grid-4 mt-2">
          {projects.map((project) => (
            <div className="card" key={project._id}>
              
                <img src="./assets/project.png" alt=""  style={{width:"50%", height:"auto", display:"block",margin:"auto","padding":"2rem"}}/>
              <div className="card-content">
                <h1 className="card-title">{project.title}</h1>
                <p className="mt-1">Author : {project.author}</p>
                <p className="mt-1">{project.description}</p>
                <div className="d-flex center" style={{"margin" : "2rem 0rem"}}>
                  <button
                    className="btn-start"
                    onClick={() => handleDownload(project._id)}
                  >
                    <HiDownload /> Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
