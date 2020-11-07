import React from "react";
import { useDataLayerValue } from "../context/DataLayer";
import ButtonComponent from "./ButtonComponent";
import DisplayStateComponent from "./DisplayStateComponent";

function FooterComponent() {
  const { put } = useDataLayerValue();

  function handleClick2() {
    put({ type: "INCREMENT_COUNTER_2_START" });
  }

  return (
    <div>
      <p>
        Hey, dude, Footer here. Don't mean to brag, but my children too have
        access to the state, and I'm not even passing any props to them!{" "}
      </p>

      <DisplayStateComponent />

      <p>
        <ButtonComponent
          instructions="Increment counter 2"
          onClick={handleClick2}
        />
      </p>
    </div>
  );
}

export default FooterComponent;
