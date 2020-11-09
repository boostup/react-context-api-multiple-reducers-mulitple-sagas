import { select, call, delay, put, takeLatest, all } from "redux-saga/effects";

function* incrementAsync() {
  const previousState = yield select();
  yield call(
    console.log,
    "I AM STARTING TO INCREMENT FROM",
    previousState.counter2
  );
  yield delay(1000);
  yield put({ type: "INCREMENT_COUNTER_2" });
  const state = yield select();
  yield call(console.log, "I AM FINISHED INCREMENTING TO", state.counter2);
}

function* listenToCounter1IncrementsAsync() {
  yield delay(1000);
  yield put({ type: "INCREMENT_COUNTER_2" });
}

//increment saga
export function* incrementCounter2Start() {
  yield takeLatest("INCREMENT_COUNTER_2_START", incrementAsync);
}

export function* listenToCounter1Increments() {
  yield takeLatest("INCREMENT_COUNTER_1", listenToCounter1IncrementsAsync);
}

export function* counter1Sagas() {
  yield all([
    //
    call(incrementCounter2Start),
    call(listenToCounter1Increments),
  ]);
}
