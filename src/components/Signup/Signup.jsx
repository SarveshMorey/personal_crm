import { Component } from "react";
// import { Link } from 'react-router-dom'
import "./Signup.css";

const SignUp = () => {
  return (

    <>
      <section id="main-section">
        <div id="login-section">
          <h1>Sign Up</h1>
          <hr />
          <div>
            <form action="" id="login-form">

             <label for="name">
                Name
                <input type="text" placeholder="Enter Your Name" id="name" />
              </label>
              <label for="lastname">
                Last Name
                <input type="text" placeholder="Enter Your Last Name" id="lastname" />
              </label>
              <label for="email">
                Email
                <input type="email" placeholder="Enter email" id="email" />
              </label>
              <label for="password">
                Password
                <input type="password" placeholder="******" id="email" />
              </label>
              <label for="password">
                Confirm Password
                <input type="password" placeholder="******" id="email" />
              </label>

              <button id="login-btn">log in</button>
            </form>
          </div>
          <div id="info-section">
            <p>
              Need an account? <span>Login</span>
            </p>

          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
