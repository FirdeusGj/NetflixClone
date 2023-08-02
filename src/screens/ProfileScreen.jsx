import React from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import PlansScreen from "./PlansScreen";
import { accountData } from "../AccountData";

export default function ProfileScreen({ setUser, currentAccount }) {
  const signOut = (e) => {
    e.preventDefault();
    setUser(false)
  }
  console.log(currentAccount)
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
            <h2>{accountData[0][0].email}</h2>
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
