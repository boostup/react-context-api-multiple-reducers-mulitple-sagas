import React from "react";
import ReactDOM from "react-dom";

import { DataLayer } from "./context/DataLayer";

import App from "./App";

import combinedReducers, {
  combinedInitialStates,
} from "./reducers/rootReducers";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={combinedInitialStates} reducer={combinedReducers}>
      <App />
    </DataLayer>
    ,
  </React.StrictMode>,
  rootElement
);
