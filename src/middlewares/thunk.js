export function createThunkMiddleware({ dispatch, thunks }) {
  //
  //Naive Thunk-like middleware
  return async function interceptAction(thunkActionObj) {
    const actionObj = await thunks[thunkActionObj.type](
      { payload: thunkActionObj.payload } || null
    );
    dispatch({ type: actionObj.type, payload: actionObj.payload });
  };
}
