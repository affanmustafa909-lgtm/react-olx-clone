import React from "react";
import { useParams } from "react-router-dom";

import "./App.css";

function BuyPage() {
  const { id } = useParams();

  return (
    <div className="buy-page">
      <h1>Order Confirmed ✅</h1>

      <p>
        Thank you for choosing OLX Clone. <br />
        Your product ID: <b>{id}</b>
      </p>

      <button className="home-btn" onClick={() => window.location.href = "/home"}>
        Back to Home
      </button>
    </div>
  );
}

export default BuyPage;
