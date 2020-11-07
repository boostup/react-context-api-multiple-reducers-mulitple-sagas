import React from "react";

const ButtonComponent = ({ instructions, onClick }) => (
  <button onClick={onClick}>{instructions} (Takes from 1 to 3 seconds)</button>
);
export default ButtonComponent;
