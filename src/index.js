import React from "react";
import ReactDOM from "react-dom";

import { DataLayer } from "./context/DataLayer";

import App from "./App";

import allReducers, { allInitialStates } from "./reducers/rootReducers";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={allInitialStates} reducer={allReducers}>
      <App />
    </DataLayer>
    ,
  </React.StrictMode>,
  rootElement
);
