import { combineThunks } from "../utils";

import { allChuckNorrisThunks } from "./chuckNorris/chuckNorris.thunk";

export const allABCThunks = {
  ["GET_ABC"]: () => console.log("GOT ABC"),
};

export const allXYZThunks = {
  ["GET_XYZ"]: () => console.log("GOT XYZ"),
  ["GET_XYZ_BIS"]: () => console.log("GOT XYZ"),
};

const combinedThunks = combineThunks({}, [
  allABCThunks,
  allXYZThunks,
  allChuckNorrisThunks,
]);

export default combinedThunks;
