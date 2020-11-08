export const fetchChuckAsync = async ({ payload }) => {
  console.log("This could be used to send to the API", payload);

  const data = await (
    await fetch("https://api.chucknorris.io/jokes/random")
  ).json();

  return { type: "GOT_CHUCK", payload: data };
};

export const allChuckNorrisThunks = {
  ["GET_CHUCK_START"]: fetchChuckAsync,
};
