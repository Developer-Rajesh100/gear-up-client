import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase.Init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignIn.css";
const SignIn = () => {
  //SIGN IN WITH EMAIL AND PASSWORD
  const [signInWithEmailAndPassword, user1, loading1, error1] =
    useSignInWithEmailAndPassword(auth);

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  //GOOGLE SIGN IN
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  if (user || user1) {
    navigate(from, { replace: true });
  }
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
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

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent Email");
    } else {
      toast("Enter Email Address");
    }
  };
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
          <div className="d-flex">
            <Link className="sign-up-link mt-1 mx-2 mb-1" to="/signup">
              Creat Account
            </Link>
            <button
              onClick={resetPassword}
              className="text-danger border-0 bg-light mt-1 mx-2 mb-1"
              to="/"
            >
              Forgot Password
            </button>
          </div>
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
      <br />
      {errorHandle}
      <ToastContainer />
    </div>
  );
};

export default SignIn;
