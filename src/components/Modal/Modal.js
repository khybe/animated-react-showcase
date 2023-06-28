import React from "react";

import "./Modal.css";

const modal = (props) => {
  const cssClasses = [
    "Modal",
    props.show === "entering"
      ? "Modal--show"
      : props.show === "exiting"
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
};

export default modal;
