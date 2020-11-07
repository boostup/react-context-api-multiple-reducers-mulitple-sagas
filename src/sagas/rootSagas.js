import { all, call } from "redux-saga/effects";

import { incrementCounter1Start } from "./counter1/counter1.sagas";
import { incrementCounter2Start } from "./counter2/counter2.sagas";

export default function* rootSaga() {
  yield all([call(incrementCounter1Start), call(incrementCounter2Start)]);
}
