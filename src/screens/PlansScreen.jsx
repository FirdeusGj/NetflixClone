import React from "react";
import "./PlansScreen.css";
import { plansData } from "../PlansData";

export default function PlansScreen() {
  const loadCheckout = async () => {
    alert(`Haven't got around to doing this :(`)
  };
  return (
    <>
      {plansData.map((elem) => (
        <>
          <div className="plansScreen__plan">
            <div key={elem.id} className="plansScreen__info">
              <h5>{elem.planName}</h5>
              <h6>{elem.planDescription}</h6>
            </div>
            <button onClick={() => loadCheckout()}>Subscribe</button>
          </div>
        </>
      ))}
    </>
  );
}
