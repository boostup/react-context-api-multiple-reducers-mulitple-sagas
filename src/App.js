/**
 *
 * Original: https://codesandbox.io/s/usereactsaga-usereducer-exercise-stuctured-into-files-context-api-pnsdk?file=/src/App.js
 */

import React from "react";

import ButtonComponent from "./components/ButtonComponent";

import DisplayStateComponent from "./components/DisplayStateComponent";

import PrettyPrint from "./components/PrettyPrint";

import { useDataLayerValue } from "./context/DataLayer";

import "./styles.css";

export default function App() {
  const { state, put } = useDataLayerValue();

  function handleClick1() {
    put({ type: "INCREMENT_COUNTER_1_START" });
  }

  function handleClick2() {
    put({ type: "INCREMENT_COUNTER_2_START" });
  }

  return (
    <div className="App">
      {/* Imagine this is in the header of your website */}
      Header <DisplayStateComponent />
      <hr />
      <ButtonComponent
        instructions="Increment counter 1"
        onClick={handleClick1}
      />
      <hr />
      <ButtonComponent
        instructions="Increment counter 2"
        onClick={handleClick2}
      />
      <hr />
      State: <PrettyPrint toPrint={state} />
      <hr />
      {/* and this the footer */}
      Footer <DisplayStateComponent />
    </div>
  );
}
