import React from "react";
import { Link } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase.Init";
import "./SignUp.css";
const SignUp = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div>
      <div className="container sign-up-form-container">
        <h1 className="mb-5">Sign Up</h1>
        <form className="form-container">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            className="form-control input-fild"
          />
          <br />
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
          <Link className="sign-in-link mt-1 mb-1" to="/signin">
            Sign In
          </Link>
          <input
            className="form-control input-fild "
            type="submit"
            value="Sign Up"
          />
        </form>
        <div className="d-flex justify-content-center">
          <button
            onClick={() => signInWithGoogle()}
            className="d-flex social-login-btn"
          >
            <img
              className="google-logo"
              src="https://i.ibb.co/3fn58k4/google.png"
              alt=""
            />
            <p>Google Sign Up</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
