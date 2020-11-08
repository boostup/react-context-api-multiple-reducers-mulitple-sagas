import { combineThunks } from "../utils";

import { allChuckNorrisThunks } from "./chuckNorris/chuckNorris.thunk";

// Because of CI failure :
// 10:59:25 PM: Treating warnings as errors because process.env.CI = true.
// 10:59:25 PM: Most CI servers set it automatically.
// 10:59:25 PM:
// 10:59:25 PM: Failed to compile.
// 10:59:25 PM:
// 10:59:25 PM: ./src/thunks/rootThunks.js
// 10:59:25 PM:   Line 6:3:   Unnecessarily computed property ["GET_ABC"] found      no-useless-computed-key
// 10:59:25 PM:   Line 10:3:  Unnecessarily computed property ["GET_XYZ"] found      no-useless-computed-key
// 10:59:25 PM:   Line 11:3:  Unnecessarily computed property ["GET_XYZ_BIS"] found  no-useless-computed-key
const GET_ABC = "GET_ABC";
const GET_XYZ = "GET_XYZ";
const GET_XYZ_BIS = "GET_XYZ_BIS";

export const allABCThunks = {
  [GET_ABC]: () => console.log("GOT ABC"),
};

export const allXYZThunks = {
  [GET_XYZ]: () => console.log("GOT XYZ"),
  [GET_XYZ_BIS]: () => console.log("GOT XYZ"),
};

const combinedThunks = combineThunks({}, [
  allABCThunks,
  allXYZThunks,
  allChuckNorrisThunks,
]);

export default combinedThunks;
