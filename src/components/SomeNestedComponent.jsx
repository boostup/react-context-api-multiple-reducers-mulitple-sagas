import React from "react";
import ButtonComponent from "./ButtonComponent";

import { useDataLayerValue } from "../context/DataLayer";

function SomeNestedComponent() {
  const { put } = useDataLayerValue();

  function handleClick() {
    put({ type: "INCREMENT_COUNTER_1_START" });
  }

  return (
    <div>
      <p>
        Some Nested Component - but no Prop drilling is allowed here
        <span role="img" aria-label="pulling my tongue">
          👅
        </span>
      </p>
      <ButtonComponent
        instructions="Press me also to increment counter 1"
        onClick={handleClick}
      />
    </div>
  );
}

export default SomeNestedComponent;
