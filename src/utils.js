export function combineReducers(slices) {
  return function (prevState, action) {
    return Object.keys(slices).reduce((nextState, nextProp) => {
      return {
        ...nextState,
        [nextProp]: slices[nextProp](prevState[nextProp], action),
      };
    }, prevState);
  };
}

export function combineThunks(prevState, slices) {
  return slices.reduce((nextState, nextProp) => {
    const keys = Object.keys(nextProp);
    const values = Object.values(nextProp);
    for (let i = 0; i < keys.length; i++) {
      nextState[keys[i]] = values[i];
    }
    return nextState;
  }, prevState);
}

export function applyMiddelware(slices, middlewares) {
  //for each slice
  return Object.keys(slices).reduce((nextSlice, sliceName) => {
    return {
      ...nextSlice,
      [sliceName]: (function () {
        //wrap with middlewares
        let reducer = slices[sliceName];
        for (let i = 0; i < middlewares.length; i++) {
          reducer = middlewares[i](reducer);
        }
        return reducer;
      })(),
    };
  }, {});
}
