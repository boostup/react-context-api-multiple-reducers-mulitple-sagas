export const counter2initialState = 0;

export function counter2Reducers(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "INCREMENT_COUNTER_2":
      return state + 1;
    default:
      return state;
  }
}
