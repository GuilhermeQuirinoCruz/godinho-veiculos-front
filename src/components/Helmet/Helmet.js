import React from "react";
import "../../styles/header.css";

const Helmet = (props) => {
  document.title = "Godinho Veículos - " + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
