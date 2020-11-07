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

      <PrettyPrint toPrint={state} />
    </div>
  );
}

export default HeaderComponent;
