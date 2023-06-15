import React, { useEffect, useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { BsFillPersonFill, BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const userDetails = localStorage.getItem("user");
  const [isLoggedIn, setIsLoggedIn] = useState({
    status: false,
    name: "",
  });
  const users = JSON.parse(userDetails);
  
  const logout = ()=>{
    localStorage.removeItem('user');
    navigate("/login")
    setIsLoggedIn({
      status : false
    })
  }
  
  useEffect(() => {
    if (userDetails) {
      const userName = users.name;
      setIsLoggedIn({
        status: true,
        name: userName,
      });
    }
  }, []);

  return (
    <>
      <header className="header">
        <div className="navbar-logo">
          <NavLink to={"/project"} href="">
            <img src="" alt="" /> Logo
          </NavLink>
        </div>
        <nav className="navbar">
          <ul className="nav-items">
            {userDetails && users.isAdmin && (
              <li>
                <NavLink to={"/"}>Admin</NavLink>
              </li>
            )}

            <li>
              <NavLink to={"/quizes"}>Quizes</NavLink>
            </li>
            <li>
              <NavLink to={"/projects"}>Projects</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Case studys</NavLink>
            </li>
          </ul>
        </nav>

        <div className="nav-icons">
          <i>
            <BsSearch />
          </i>

          {userDetails && isLoggedIn.status ? (
            <p className="name" onClick={logout}>{isLoggedIn.name}</p>
          ) : (
            <i
              onClick={() => {
                navigate("/login");
              }}
            >
              <BsFillPersonFill />
            </i>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
