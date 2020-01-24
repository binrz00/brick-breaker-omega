import React, { useReducer, useEffect } from "react";
import "./styles.css";
import Paddle from "./components/paddle";
import Ball from "./components/ball";

const initialState = {
  paddle: {
    x: 0
  },
  ball: {
    x: 0,
    y: 0,
    dx: 5,
    dy: 5
  }
};

function reducer(state, action) {
  switch (action.type) {
    case "MOVE_PADDLE":
      return { ...state, paddle: action.payload };
    case "MOVE_BALL":
      return { ...state, ball: action.payload };
    default:
      throw new Error();
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleMouse(e) {
    let boundedX;
    const offset = (window.innerWidth - 300) / 2;
    if (e.x - offset < 0) {
      boundedX = 0;
    } else if (e.x - offset > 200) {
      boundedX = 200;
    } else {
      boundedX = e.x - offset;
    }
    dispatch({
      type: "MOVE_PADDLE",
      payload: {
        x: boundedX
      }
    });
  }
  useEffect(() => {
    window.addEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const handle = setTimeout(() => {
      let dx = state.ball.dx;
      let dy = state.ball.dy;
      if (
        state.ball.x + state.ball.dx > 300 - 20 ||
        state.ball.x + state.ball.dx < 0
      ) {
        dx = -dx;
      }
      if (
        state.ball.y + state.ball.dy > 400 - 20 ||
        state.ball.y + state.ball.dy < 0
      ) {
        dy = -dy;
      }
      dispatch({
        type: "MOVE_BALL",
        payload: {
          dx,
          dy,
          x: state.ball.x + dx,
          y: state.ball.y + dy
        }
      });
    }, 50);
    return () => clearTimeout(handle);
  }, [state.ball]);

  return (
    <div className="container">
      <Paddle paddleX={state.paddle.x} />
      <Ball pos={state.ball} />
    </div>
  );
}
