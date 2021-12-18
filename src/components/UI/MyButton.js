import React from "react";
import classes from "./MyButton.module.css";

function MyButton({
  isBig = false,
  isHole = false,
  Click,
  children,
  ...props
}) {
  return (
    <button
      onClick={Click}
      {...props}
      className={`${classes["def-btn"]}  ${isBig && classes["def-btn_big"]} ${
        isHole && classes["def-btn_hole"]
      } `}
    >
      {children}
    </button>
  );
}

export default MyButton;
