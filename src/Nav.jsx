import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Navigate, useNavigate } from "react-router-dom";
export default function Nav() {
  const [show, handleShow] = useState(false);

const history = useNavigate()

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar)
  }, []);
  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
          alt=""
        />
        <img
        onClick={() => Navigate.push('/profile')}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
          alt=""
        />
      </div>
    </div>
  );
}
