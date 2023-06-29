import React from "react";
import Transition from "react-transition-group/Transition";

import "./Modal.css";

const animationDuration = {
  enter: 400,
  exit: 1000,
};

const modal = (props) => {
  return (
    <Transition
      in={props.show}
      timeout={animationDuration}
      mountOnEnter
      unmountOnExit
    >
      {(state) => {
        const cssClasses = [
          "Modal",
          state === "entering"
            ? "Modal--show"
            : state === "exiting"
            ? "Modal--hide"
            : null,
        ];

        return (
          <div className={cssClasses.join(" ")}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;
