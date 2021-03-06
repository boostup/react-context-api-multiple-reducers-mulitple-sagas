import React from "react";
import { useDataLayerValue } from "../context/DataLayer";
import PrettyPrint from "./PrettyPrint";
import SomeNestedComponent from "./SomeNestedComponent";

const DisplayStateComponent = () => {
  const { state } = useDataLayerValue();
  return (
    <div>
      <p>
        I have access to everything: I'm the king of the world! Look at all that
        state :
      </p>
      <PrettyPrint toPrint={state} />
      <SomeNestedComponent />
    </div>
  );
};

export default DisplayStateComponent;
