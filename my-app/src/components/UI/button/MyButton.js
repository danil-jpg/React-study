import React from "react";
import cssClass from "./MyButton.module.css";

const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={cssClass.MyBtn}>
      {children}
    </button>
  );
};

export default MyButton;
