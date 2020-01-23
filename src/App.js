import React from "react";
import "./styles.css";
import Paddle from "./components/paddle";
import Ball from "./components/ball";
export default function App() {
  return (
    <div className="container">
      <Paddle />
      <Ball />
    </div>
  );
}
