import React from "react";

import ButtonComponent from "./components/ButtonComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import Loader from "./components/Loader";

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
    <>
      <div className="App">
        <p>
          Imagine this is an actual website, where components need to display
          some state, or let's be crazy: even set some state !
        </p>

        <HeaderComponent />

        <br />

        <p>
          We, buttons below, live on the ground floor, level 0, in the App.js
          file directly but, we're cool!
        </p>

        <p>
          <ButtonComponent
            instructions="Press me to increment counter 1"
            onClick={handleClick1}
          />
        </p>

        <hr />

        <p>
          <span role="img" aria-label="pulling my tongue">
            👀 👍
          </span>
          <ButtonComponent
            instructions="PRESS ME!!  BTW: whenever I see that counter 1 increments, I increment counter 2!  This way, I'm always ahead of competition."
            onClick={handleClick2}
          />
        </p>

        <br />

        <FooterComponent />
      </div>
      <Loader show={state.ui.isWorking} />
    </>
  );
}
