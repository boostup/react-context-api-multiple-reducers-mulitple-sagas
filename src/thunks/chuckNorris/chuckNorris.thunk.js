export const fetchChuckAsync = async ({ payload }) => {
  // console.log("This could be used to send to the API", payload);

  const data = await (
    await fetch("https://api.chucknorris.io/jokes/random")
  ).json();

  return { type: "GOT_CHUCK", payload: data };
};

// Because of CI failure :
// 10:59:25 PM: Treating warnings as errors because process.env.CI = true.
// 10:59:25 PM: Most CI servers set it automatically.
// 10:59:25 PM:
// 10:59:25 PM: Failed to compile.
// 10:59:25 PM:
// 10:59:25 PM: ./src/thunks/chuckNorris/chuckNorris.thunk.js
// 10:59:25 PM:   Line 12:3:  Unnecessarily computed property ["GET_CHUCK_START"] found  no-useless-computed-key
const GET_CHUCK_START = "GET_CHUCK_START";
export const allChuckNorrisThunks = {
  [GET_CHUCK_START]: fetchChuckAsync,
};
