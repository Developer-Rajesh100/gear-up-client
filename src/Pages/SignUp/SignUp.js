import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase.Init";
import { sendEmailVerification } from "firebase/auth";
import "./SignUp.css";
const SignUp = () => {
  //SIGN UP WITH EMAIL AND PASSWORD
  const [createUserWithEmailAndPassword, user1, loading1, error1] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };

  //GOOGLE SIGN UP
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  if (user || user1) {
    navigate("/");
  }
  let errorHandle;
  if (error || error1) {
    errorHandle = (
      <p className="text-danger">
        <strong>Error:</strong>{" "}
        <i>
          {error?.message} {error1?.message}
        </i>
      </p>
    );
  }
  return (
    <div>
      <div className="container sign-up-form-container">
        <h1 className="mb-5">Sign Up</h1>
        <form onSubmit={handleRegister} className="form-container">
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
          <Link className="sign-in-link mt-1 mb-1" to="/login">
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
      <br />
      {errorHandle}
    </div>
  );
};

export default SignUp;
