import { all, call } from "redux-saga/effects";

import { incrementCounter1Start } from "./counter1/counter1.sagas";
import { counter1Sagas } from "./counter2/counter2.sagas";
import { uiSagas } from "./ui/ui.sagas";

export default function* rootSaga() {
  yield all([
    //
    call(incrementCounter1Start),
    call(counter1Sagas),
    call(uiSagas),
  ]);
}
