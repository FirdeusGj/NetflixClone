import React, { useState } from "react";
import "./Register.css";
import { accountData } from "../AccountData";
export default function Register({ setUser, setSignIn, setSignUp }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const passwordWrong = document.querySelector(".registerPass");
  const passwordConfirmWrong = document.querySelector(".registerPassConfirm");
  const registerData = [
    {
      id: accountData.length,
      name: name,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }
  ]
  const registerForm = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      passwordWrong.style.boxShadow = "0 0 3px 2px #ff4545";
      passwordConfirmWrong.style.boxShadow = "0 0 3px 2px #ff4545";
    } else {
      setUser(true);
      accountData.push(registerData)
      console.log(accountData)
    }
  };
  const alreadyHave = () => {
    setSignIn(true);
    setSignUp(false);
  };
  const setInputName = (e) => {
    setName(e.target.value);
  };
  const setInputLastName = (e) => {
    setLastName(e.target.value);
  };
  const setInputEmail = (e) => {
    setEmail(e.target.value);
  };
  const setInputPassword = (e) => {
    setPassword(e.target.value);
  };
  const setInputConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  return (
    <div className="registerScreen">
      <form>
        <h1>Sign Up</h1>
        <div>
          <input
            onChange={setInputName}
            type="text"
            placeholder="Name"
            required
          />
          <input
            onChange={setInputLastName}
            type="text"
            placeholder="Last Name"
            required
          />
        </div>
        <input
          onChange={setInputEmail}
          required
          type="email"
          placeholder="Email"
        />
        <input
          className="registerPass"
          onChange={setInputPassword}
          required
          placeholder="Password"
          type="password"
        />
        <input
          className="registerPassConfirm"
          onChange={setInputConfirmPassword}
          required
          placeholder="Confirm Password"
          type="password"
        />
        <button
          type="submit"
          onClick={
            name !== "" &&
            lastName !== "" &&
            email.includes("@gmail.com") &&
            password !== "" &&
            confirmPassword !== ""
              ? registerForm
              : null
          }
        >
          Sign In
        </button>
        <h4>
          <span className="registerScreen__gray">Already Have an accout?</span>

          <span className="registerScreen__link" onClick={alreadyHave}>
            Sign In now.
          </span>
        </h4>
      </form>
    </div>
  );
}
