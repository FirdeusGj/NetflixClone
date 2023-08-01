import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";
import { Link } from "react-router-dom";
import Register from "./Register";

export default function LoginScreen({ setUser }) {
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const homeScreen = () => {
    setSignIn(false)
    setSignUp(false)
  }
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          onClick={homeScreen}
          style={{ cursor: "pointer" }}
          className="loginScreen__logo"
          src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignupScreen setUser={setUser} setSignIn={setSignIn} setSignUp={setSignUp} />
        ) : signUp ? <Register/> : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Adress" required />
                <button onClick={() => setSignUp(true)} className="loginScreen__getStarted">GET STARTED</button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
