import React, { useState } from "react";
import "./SignupScreen.css";
import { accountData } from "../AccountData";

export default function SignupScreen({
  setUser,
  setSignUp,
  setSignIn,
  
}) {
  const [inputChange, setInputchange] = useState("");
  const [inputChangePass, setInputchangePass] = useState("");
  const emails = accountData.map((elem) => elem[0]);
  const fetchedEmails = emails.map((elem) => elem.email);
  const passwords = accountData.map((elem) => elem[0]);
  const fetchedPasswords = passwords.map((elem) => elem.password)
  console.log(accountData);
  let emailFound = false;
  let passwordFound = false;
  const register = (e) => {
    e.preventDefault();
    setSignUp(true);
    setSignIn(false);
  };
  const setInputChangeFunction = (event) => {
    setInputchange(event.target.value);
  };
  const setInputChangePassFunction = (event) => {
    setInputchangePass(event.target.value);
  };
  const signIn = (e) => {
    e.preventDefault();
    for(let i = 0; i < fetchedEmails.length; i++){
      if(fetchedEmails[i] === inputChange){
        emailFound = true;
        break;
      }
    }
    for(let i = 0; i< fetchedPasswords.length; i++){
      if(fetchedPasswords[i] === inputChangePass){
        passwordFound = true;
        break;
      }
    }
    if (emailFound && passwordFound) {
      setUser(true);
    } else {
      alert("invalid password or email");
    }
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
            inputChange.includes("@gmail.com")
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
