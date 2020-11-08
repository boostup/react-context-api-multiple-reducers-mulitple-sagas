export const counter1initialState = 0;

export function counter1Reducers(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "INCREMENT_COUNTER_1":
      return state + 1;
    default:
      return state;
  }
}
