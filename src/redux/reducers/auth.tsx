const initialState = {
  access_token: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_AUTH_SUCCESS":
      return {
        ...state,
        access_token: action.payload.access_token,
      };
    default:
      return state;
  }
};

export default auth;
