import React, { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const appContext = React.createContext();

const AppProvider = ({ children }) => {
  // Title change ----->
  const url = import.meta.env.VITE_API_URL;
  const titleChange = (str) => {
    return (document.title = str);
  };

  //!todo create a function for doing the postapi fetch ----->
  const [isLogIn, setIslogin] = useState(false);
  const postApiFetch = async (api, inputData) => {
    try {
      const datas = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });
      const res = await datas.json();
      //   console.log(res);
      if (res.msg) {
        toast.success(res.msg, {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        if (res.userDetails) {
          const expirationTime = new Date().getTime() + (1* 24 * 60 * 60 * 1000);
          localStorage.setItem("user", JSON.stringify({...res.userDetails,expirationTime}));
          setIslogin(true)
        }
      } else{
        toast.warn(res.err, {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      };
    } catch (error) {
      console.log(error);
    }
  };

  //* Register part ------->

  const [regData, setAllRegDta] = useState({
    name: "",
    email: "",
    pass: "",
    cpass: "",
  });

  const [regErr, setRegErr] = useState({
    name: false,
    email: false,
    pass: false,
    cpass: false,
  });

  const regChangeHandler = (e) => {
    const { name, value } = e.target;
    setAllRegDta({ ...regData, [name]: value });
    if (regData.name.length < 3) {
      setRegErr({
        name: true,
      });
    } else if (regData.email.indexOf("@") === -1) {
      setRegErr({
        email: true,
      });
    } else if (regData.pass.length < 7) {
      setRegErr({
        pass: true,
      });
    } else if (regData.cpass.length < 7) {
      setRegErr({
        cpass: true,
      });
    } else if (regData.pass.length > 7) {
      setRegErr({
        pass: false,
      });
    }
  };

  //* Register btn click function ----->

  const regBtnClick = (e) => {
    e.preventDefault();
    if (!regErr.name && !regErr.email && !regErr.pass && !regErr.cpass) {
      console.log(regData);
      postApiFetch(`${url}/register`, regData);
      setAllRegDta({
        name: "",
        email: "",
        pass: "",
        cpass: "",
      });
    }
  };

  //* Log INpart ---------->

  const [loginData, setAllLoginData] = useState({
    email: "",
    pass: "",
  });
  
  const loginChangeHandler = (e) => {
    const { name, value } = e.target;
    setAllLoginData({ ...loginData, [name]: value });
  };


  const loginClickhandler = (e) => {
    e.preventDefault();
    console.log(loginData);
    postApiFetch(`${url}/login`, loginData);
    setAllLoginData({
      email: "",
      pass: "",
    });
    if(localStorage.getItem("user")){
      setIslogin(true);
    }
  };

  // * Start quizes part---->

  const [allQues, setAllQues] = useState([]) // For getting all the quiz data 
 

  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState(false)
  //  create a function to fetch all get data

  const getApidata =async (api,setData)=>{
    setisLoading(true);
    setisError(false)
    try {
      const data = await fetch(api)
      const res = await data.json();
      console.log(res.success);
      res? setisLoading(false) : setisLoading(true);
      res.success?
      setData(res.success) : setisError(true);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <appContext.Provider
      value={{
        titleChange,
        regData,
        regErr,
        regBtnClick,
        regChangeHandler,
        loginData,
        loginChangeHandler,
        loginClickhandler,
        getApidata,
        allQues,
        setAllQues,url,
        isLoading,
        isError,
        isLogIn,
        postApiFetch,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

const useGloblaHook = () => useContext(appContext);
export { useGloblaHook, AppProvider };
