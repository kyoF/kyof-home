import React, { FC } from "react";
import "./Button.css";
import { withRouter } from "react-router-dom";

const Button: FC = () => {
  const handleToPage = () => {};

  return (
    <div
      className="Button"
      onClick={() => {
        handleToPage();
      }}
    >
      {}
    </div>
  );
};

export default Button;
