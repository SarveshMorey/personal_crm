import { Component } from "react";
// import { Link } from 'react-router-dom'
import "./Form.css";

const Form = () => {
  return (

    <>
      <section id="main-section">
        <div id="login-section">
          <h1>Log in</h1>
          <hr />
          <div>
            <form action="" id="login-form">
              <label for="email">
                Email
                <input type="email" placeholder="Enter email" id="email" />
              </label>
              <label for="password">
                Password
                <input type="password" placeholder="******" id="email" />
              </label>

              <button id="login-btn">log in</button>
            </form>
          </div>
          <div id="info-section">
            <p>
              Need an account? <span>Sign up</span>
            </p>
            <em>Forgot your password?</em>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
