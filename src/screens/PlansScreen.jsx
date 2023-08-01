import React, { useEffect, useState } from "react";
import "./PlansScreen.css";
import { plansData } from "../PlansData";

export default function PlansScreen() {
  const loadCheckout = async (id) => {
    console.log(id);
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
            <button onClick={() => loadCheckout(elem.id)}>Subscribe</button>
          </div>
        </>
      ))}
    </>
  );
}
