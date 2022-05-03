import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
const SignIn = () => {
  return (
    <div>
      <div className="container sign-in-form-container">
        <h1 className="mb-5">Sign In</h1>
        <form className="form-container">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="form-control input-fild"
          />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            className="form-control input-fild"
          />
          <Link className="sign-up-link mt-1 mb-1" to="/signup">
            Creat Account
          </Link>
          <input
            className="form-control input-fild mt-1 mb-1"
            type="submit"
            value="Sign In"
          />
        </form>
        <div className="d-flex justify-content-center">
          <button className="d-flex social-login-btn">
            <img
              className="google-logo"
              src="https://i.ibb.co/3fn58k4/google.png"
              alt=""
            />
            <p>Google Sign In</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
