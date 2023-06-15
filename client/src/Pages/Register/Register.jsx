import React from 'react'
import "./register.css"
import { BsFillPersonFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { RiLockPasswordFill } from "react-icons/ri";
import { Si1Password } from "react-icons/si";
import { NavLink, useNavigate } from "react-router-dom";
import Button from '../../Components/Button/Button';
import { useGloblaHook } from '../../Hooks/Context';
const Register = () => {
  const {regData, regChangeHandler,regErr,regBtnClick} = useGloblaHook();
  return (
   <>
       <div className="register">
        <div className="register-card">
          <div className="register-card2">
            <div className="card-left">
              <img src="./assets/register.png" alt="register img" />
            </div>
            <div className="card-right">
              <form>
                <h1>Sign up</h1>
                <div className="inp-field">
                  <span className="icon">
                    <BsFillPersonFill />
                  </span>
                  <input
                    type="text"
                    placeholder="Name :"
                    autoComplete="off"
                    name="name"
                    value={regData.name}
                    onChange={regChangeHandler}
                  />
                </div>
                {regErr.name ? <p className="err">Name should have atleast 3 Character</p> : ""}
                <div className="inp-field">
                  <span className="icon">
                    <GrMail />
                  </span>
                  <input
                    type="email"
                    placeholder="Email id:"
                    autoComplete="off"
                    name="email"
                    value={regData.email}
                    onChange={regChangeHandler}
                  />
                </div>
                {regErr.email ? <p className="err">Email must have @ sign</p> : ""}
                <div className="inp-field">
                  <span className="icon">
                    <RiLockPasswordFill />
                  </span>
                  <input
                    type="password"
                    placeholder="Password :"
                    autoComplete="off"
                    name="pass"
                    value={regData.pass}
                    onChange={regChangeHandler}
                  />
                </div>
                {regErr.pass ? <p className="err">Password should have atleaset 8 character</p> : ""}
                <div className="inp-field">
                  <span className="icon">
                    <Si1Password />
                  </span>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    autoComplete="off"
                    name="cpass"
                    value={regData.cpass}
                    onChange={regChangeHandler}
                  />
                </div>
               
                {regErr.cpass ? <p className="err"> Confirm Password should have atleaset 8 character</p> : ""}
                <div className="btns">
                  <Button btnName={"Sign up"} btnClick={regBtnClick} />
                  <NavLink to={"/"}>
                    <Button btnName={"Sign In"} />
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default Register