import React from "react";
import "./paddle.css";

export default function Paddle({ paddleX }) {
  return (
    <div
      className="paddle"
      style={{
        left: `${paddleX}px`
        // transform: `translateX(calc(-50% + ${paddleX}px))`
      }}
    />
  );
}
