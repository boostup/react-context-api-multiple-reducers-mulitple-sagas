import React from "react";
import { useDataLayerValue } from "../context/DataLayer";
import PrettyPrint from "./PrettyPrint";

const DisplayStateComponent = () => {
  const { state } = useDataLayerValue();
  return (
    <div>
      <PrettyPrint toPrint={state} />
    </div>
  );
};

export default DisplayStateComponent;
