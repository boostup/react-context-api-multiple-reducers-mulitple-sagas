export const uiInitialState = {
  isWorking: false,
};

export function uiReducers(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "IS_WORKING":
      return {
        ...state,
        isWorking: action.payload,
      };
    default:
      return state;
  }
}
