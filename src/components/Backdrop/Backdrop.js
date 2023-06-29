import React from "react";

import "./Backdrop.css";

const backdrop = (props) => {
  const cssClasses = [
    "Backdrop",
    props.show ? "Backdrop--show" : "Backdrop--hide",
  ];
  return <div className={cssClasses.join(" ")} onClick={props.closed}></div>;
};

export default backdrop;
