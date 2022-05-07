import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase.Init";
import "./SignIn.css";
const SignIn = () => {
  //SIGN IN WITH EMAIL AND PASSWORD

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  };

  //GOOGLE SIGN IN
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div>
      <div className="container sign-in-form-container">
        <h1 className="mb-5">Sign In</h1>
        <form onSubmit={handleSubmit} className="form-container">
          <input
            ref={emailRef}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="form-control input-fild"
          />
          <br />
          <input
            ref={passwordRef}
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
          <button
            onClick={() => signInWithGoogle()}
            className="d-flex social-login-btn"
          >
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
