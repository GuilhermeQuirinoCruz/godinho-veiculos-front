import React from "react";
import "../../styles/header.css";

const Helmet = (props) => {
<<<<<<< HEAD
  document.title = "Godinho Veículos - " + props.title;
  return <div className="w-100">{props.children}</div>;
=======
  document.title = "Rent Car Service - " + props.title;
  return <div className="w-100 cor">{props.children}</div>;
>>>>>>> 308aaed (fiz um tanto de coisa)
};

export default Helmet;
