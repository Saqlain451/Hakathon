import React, { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import Button from "../../Components/Button/Button";
import "./login.css";
import { useGloblaHook } from "../../Hooks/Context";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
const Login = () => {
  const { loginData, loginChangeHandler,loginClickhandler,isLogIn } = useGloblaHook();
  const navigate = useNavigate();
  setTimeout(()=>{
    if(isLogIn){
      navigate("/");
    }
  },[4000])
  
  useEffect(()=>{
    if(localStorage.getItem("user")){
      navigate("/");
    }
  },[])
  return (
    <>
      <div className="register ">
        <div className="register-card register-2">
          <div className="register-card2 register-2">
            <div className="card-right">
              <form>
                <h1>Sign In</h1>

                <div className="inp-field">
                  <span className="icon">
                    <BsFillPersonFill />
                  </span>
                  <input
                    type="email"
                    placeholder="Email id:"
                    autoComplete="off"
                    name="email"
                    value={loginData.email}
                    onChange={loginChangeHandler}
                  />
                </div>
                
                <div className="inp-field">
                  <span className="icon">
                    <RiLockPasswordFill />
                  </span>
                  <input
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    name="pass"
                    value={loginData.pass}
                    onChange={loginChangeHandler}
                  />
                </div>
                
                <div className="btns">
                  <Button btnName={"Sign In"} btnClick={loginClickhandler} />
                  <NavLink to={"/register"}>
                    <Button btnName={"Sign up"} />
                  </NavLink>
                </div>
                <NavLink to={"/update"}>
                  <Button btnName={"Forgot password"} />
                </NavLink>
              </form>
            </div>
            <div className="card-left">
              <img src="./assets/sign.png" alt="register img" />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};

export default Login;
