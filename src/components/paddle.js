import React, { useEffect, useState } from "react";
import "./paddle.css";
export default function Paddle() {
  let [paddleX, setPaddleX] = useState(0);
  if (paddleX <= 32) {
    paddleX = 32;
  }
  if (paddleX >= 235) {
    paddleX = 235;
  }

  function handleMouse(e) {
    setPaddleX(e.x);
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouse);
  }, []);
  console.log(paddleX);

  return <div className="paddle" style={{ left: `${paddleX}px` }} />;
}
