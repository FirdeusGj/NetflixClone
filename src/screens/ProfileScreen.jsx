import React from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import PlansScreen from "./PlansScreen";

export default function ProfileScreen() {
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
            <h2>Useremail@gmail.com</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <PlansScreen/>
              <button className="profileScreen__signOut">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
