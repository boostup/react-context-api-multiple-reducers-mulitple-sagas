import React from "react";

import ButtonComponent from "./components/ButtonComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";

import { useDataLayerValue } from "./context/DataLayer";

import "./styles.css";

export default function App() {
  const {
    // state,//so es-lint does not brag!
    put,
  } = useDataLayerValue();

  function handleClick1() {
    put({ type: "INCREMENT_COUNTER_1_START" });
  }

  function handleClick2() {
    put({ type: "INCREMENT_COUNTER_2_START" });
  }

  return (
    <div className="App">
      <p>
        Imagine this is an actual website, where components need to display some
        state, or let's be crazy: even set some state !
      </p>

      <HeaderComponent />

      <p>
        We, buttons below, live on the ground floor, level 0, in the App.js file
        directly but, we're cool!
      </p>

      <p className="App__groundFloor">
        <ButtonComponent
          instructions="Press me to increment counter 1"
          onClick={handleClick1}
        />
        <hr />
        <ButtonComponent
          instructions="No no, press me to increment counter 2, he's much better ;)"
          onClick={handleClick2}
        />
      </p>

      <FooterComponent />
    </div>
  );
}
