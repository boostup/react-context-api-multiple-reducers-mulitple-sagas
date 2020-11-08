export const chuckNorrisInitialState = {
  data: {},
};

export function chuckNorrisReducers(state, action) {
  switch (action.type) {
    case "GOT_CHUCK":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
