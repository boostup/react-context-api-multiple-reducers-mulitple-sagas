import React from "react";
import { useDataLayerValue } from "../context/DataLayer";
import PrettyPrint from "./PrettyPrint";

function HeaderComponent() {
  const { state } = useDataLayerValue();

  return (
    <div>
      <p>
        Hey! what's up!? I'm the Header of this website. Look at my pretty
        state:
      </p>

      <div>
        <PrettyPrint toPrint={state} />
      </div>
    </div>
  );
}

export default HeaderComponent;
