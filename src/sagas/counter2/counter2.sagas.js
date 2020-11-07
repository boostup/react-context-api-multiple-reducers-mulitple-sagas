import { select, call, delay, put, takeLatest } from "redux-saga/effects";

function* incrementAsync() {
  const previousState = yield select();
  yield call(
    console.log,
    "I AM STARTING TO INCREMENT FROM",
    previousState.counter2
  );
  yield delay(2000);
  yield put({ type: "INCREMENT_COUNTER_2" });
  const state = yield select();
  yield call(console.log, "I AM FINISHED INCREMENTING TO", state.counter2);
}

//increment saga
export function* incrementCounter2Start() {
  yield takeLatest("INCREMENT_COUNTER_2_START", incrementAsync);
}
