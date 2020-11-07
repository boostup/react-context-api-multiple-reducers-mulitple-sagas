import { select, call, delay, put, takeLatest } from "redux-saga/effects";

function* incrementAsync() {
  const previousState = yield select();
  yield call(
    console.log,
    "I AM STARTING TO INCREMENT FROM",
    previousState.counter1
  );
  yield delay(1000);
  yield put({ type: "INCREMENT_COUNTER_1" });
  const state = yield select();
  yield call(console.log, "I AM FINISHED INCREMENTING TO", state.counter1);
}

//increment saga
export function* incrementCounter1Start() {
  yield takeLatest("INCREMENT_COUNTER_1_START", incrementAsync);
}
