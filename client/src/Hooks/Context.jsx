import React, { useContext, useState } from "react";
const appContext = React.createContext();

const AppProvider = ({ children }) => {
  // Title change ----->
  const url = import.meta.env.VITE_API_URL;
  const titleChange = (str) => {
    return (document.title = str);
  };

  //!todo create a function for doing the postapi fetch ----->

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
        alert(res.msg);
        if (res.userDetails) {
          //   console.log(res.userDetails);
          const expirationTime = new Date().getTime() + (1* 24 * 60 * 60 * 1000);
          localStorage.setItem("user", JSON.stringify({...res.userDetails,expirationTime}));
        }
      } else alert(res.err);
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

  console.log(url);

  const loginClickhandler = (e) => {
    e.preventDefault();
    console.log(loginData);
    postApiFetch(`${url}/login`, loginData);
    setAllLoginData({
      email: "",
      pass: "",
    });
  };

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
      }}
    >
      {children}
    </appContext.Provider>
  );
};

const useGloblaHook = () => useContext(appContext);
export { useGloblaHook, AppProvider };