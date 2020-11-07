import {
  counter1initialState,
  counter1Reducers,
} from "./counter1/counter1.reducers";
import {
  counter2initialState,
  counter2Reducers,
} from "./counter2/counter2.reducers";
import { uiInitialState, uiReducers } from "./ui/ui.reducers";

function combineReducers(slices) {
  return function (prevState, action) {
    return Object.keys(slices).reduce((nextState, nextProp) => {
      return {
        ...nextState,
        [nextProp]: slices[nextProp](prevState[nextProp], action),
      };
    }, prevState);
  };
}

export const allInitialStates = {
  counter1: counter1initialState,
  counter2: counter2initialState,
  ui: uiInitialState,
};

const allReducers = combineReducers({
  counter1: counter1Reducers,
  counter2: counter2Reducers,
  ui: uiReducers,
});

export default allReducers;
