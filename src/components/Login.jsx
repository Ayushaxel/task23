import React from "react";

const Login = () => {
  return (
    <div className="loginPage">
      <div className="loginDiv">
        <form>
          <h1 style={{marginTop:"20px", textAlign:"center"}}>Login</h1>

          <div style={{ width: "100%" }}>
            <label htmlFor="">Email</label>
            <br />
            <input type="email" placeholder="Email" />
          </div>

          <div style={{ width: "100%" }}>
            <label htmlFor="">Password</label>
            <br />
            <input type="password" placeholder="password" />
          </div>
          <button className="loginBtn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;