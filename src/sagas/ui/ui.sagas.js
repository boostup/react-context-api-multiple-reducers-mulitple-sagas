import { call, put, takeLatest, all } from "redux-saga/effects";

export function* isWorkingAsync() {
  yield put({ type: "IS_WORKING", payload: true });
}

export function* isFinishedAsync() {
  yield put({ type: "IS_WORKING", payload: false });
}

export function* counter2StartedIncrementing() {
  yield takeLatest("INCREMENT_COUNTER_2_START", isWorkingAsync);
}

export function* counter2FinishedIncrementing() {
  yield takeLatest("INCREMENT_COUNTER_2", isFinishedAsync);
}

export function* uiSagas() {
  yield all([
    //
    call(counter2StartedIncrementing),
    call(counter2FinishedIncrementing),
  ]);
}
