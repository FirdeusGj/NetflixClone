import React from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import PlansScreen from "./PlansScreen";
import { accountData } from "../AccountData";
import { profile } from "../ProfileData";
export default function ProfileScreen({ setUser }) {
  const signOut = (e) => {
    e.preventDefault();
    setUser(false)
  }
  let email = profile.length - 1
  let lastMail = profile[email]
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{lastMail}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <PlansScreen/>
              <button onClick={signOut} className="profileScreen__signOut">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
