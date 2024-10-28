import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/dashboard">
        <div className="imgDiv">
          <img
            src="https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png"
            alt="img"
          />
        </div>
      </Link>

      <div className="home">
      
          <NavLink to='/' className={({isActive})=>`
           ${isActive?"text-orange-500":''}
          `
           
          } >
            <p
              style={{ textDecoration: "none" }}
              className={({ isActive }) => (isActive ? "text-orange-500" : "")}
            >
              Home
            </p>
          </NavLink>
       
      </div>

      <div className="btns">
        <NavLink to="/login" className={({isActive})=>` ${isActive ?'text-orange-500':'text-white'}`}>
          <button>Login</button>
        </NavLink>
        <NavLink to="/signup" className={({isActive})=>` ${isActive ?'text-orange-500':'text-white'}`}>
          <button>SignUp</button>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
