let initialState = [];

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
