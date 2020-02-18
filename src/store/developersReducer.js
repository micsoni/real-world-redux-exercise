const initialState = [];

export default function developersReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_DEVELOPERS": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
