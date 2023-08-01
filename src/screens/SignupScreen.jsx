import React, { useEffect, useRef, useState } from "react";
import "./SignupScreen.css";

export default function SignupScreen({ setUser, setInputData}) {
  const [inputChange, setInputchange] = useState("");
  const [inputChangePass, setInputchangePass] = useState("");

  const register = (e) => {
    e.preventDefault();
  };
  const setInputChangeFunction = (event) => {
    setInputchange(event.target.value);
  };
  const setInputChangePassFunction = (event) => {
    setInputchangePass(event.target.value);
  };
  const signIn = (e) => {
    e.preventDefault();
    setUser(true)
    setInputData(inputChange)
  };
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input
          required
          type="email"
          value={inputChange}
          onChange={setInputChangeFunction}
          placeholder="Email"
        />
        <input
          required
          placeholder="Password"
          value={inputChangePass}
          onChange={setInputChangePassFunction}
          type="password"
        />
        <button
          type="submit"
          onClick={
            inputChange !== "" &&
            inputChangePass !== "" &&
            inputChange.includes("@")
              ? signIn
              : null
          }
        >
          Sign In
        </button>
        <h4>
          <span className="signupScreen__gray">New to Netflix?</span>
          <span className="signupScreen__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}
