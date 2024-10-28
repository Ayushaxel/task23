
import React from 'react'

const Signup = () => {
  return (
    <div className="loginPage">
    <div className="loginDiv">
      <form>
        <h1 style={{marginTop:"20px", textAlign:"center"}}>SignUp</h1>

        <div style={{ width: "100%" }}>
          <label htmlFor="">Name</label>
          <br />
          <input type="text" placeholder="Name" />
        </div>


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
  )
}

export default Signup
