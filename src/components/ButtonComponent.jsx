import React from "react";
import { useDataLayerValue } from "../context/DataLayer";

const ButtonComponent = ({ instructions, onClick, title, style = {} }) => {
  const { dispatch } = useDataLayerValue();

  function handleClick() {
    dispatch({ type: "IS_WORKING", payload: true });
    onClick();

    setTimeout(() => {
      dispatch({ type: "IS_WORKING", payload: false });
    }, 1000);
  }

  return (
    <button style={style} title={title} onClick={handleClick}>
      {instructions}
    </button>
  );
};
export default ButtonComponent;
