import React from "react";

import { useDataLayerValue } from "../context/DataLayer";
import ButtonComponent from "./ButtonComponent";
import PrettyPrint from "./PrettyPrint";

function HeaderComponent() {
  const { state, thunk } = useDataLayerValue();

  const getChuck = () => {
    thunk({
      type: "GET_CHUCK_START",
      payload: { someValue: "some value" },
    });
  };

  return (
    <div>
      <p>
        Hey! what's up!? I'm the Header of this website. Look at my pretty
        state:
      </p>

      <div>
        <PrettyPrint toPrint={state} />
      </div>
      <p></p>
      <div>
        <ButtonComponent
          instructions="Get Chuck Norris (Thunk-like Async action)"
          onClick={getChuck}
        />
        <p>{state.chuckNorris.data.value}</p>
      </div>
    </div>
  );
}

export default HeaderComponent;
