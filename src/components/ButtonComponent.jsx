import React from "react";

const ButtonComponent = ({ instructions, onClick }) => (
  <button onClick={onClick}>{instructions} (Asynchronous)</button>
);
export default ButtonComponent;
