import React, { createContext, useContext, useReducer } from "react";
import { useReactSaga } from "use-react-saga";
import allSagas from "../sagas/rootSagas";

import { createThunkMiddleware } from "../middlewares/thunk";
import allThunks from "../thunks/rootThunks";

export const DataLayerContext = createContext();

export function DataLayer({ initialState, reducer, children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const put = useReactSaga({ state, dispatch, saga: allSagas });
  const thunk = createThunkMiddleware({ dispatch, thunks: allThunks });

  return (
    <DataLayerContext.Provider
      value={{
        state,
        //Sync actions => for dispatching regular action objects
        dispatch,
        //Async actions => for using async functions (of type `generator`), which in turn dispatch an action object, in some unknown amount of time
        put,
        //
        thunk,
      }}
    >
      {children}
    </DataLayerContext.Provider>
  );
}
export const useDataLayerValue = () => useContext(DataLayerContext);
