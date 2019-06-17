import { FETCH_USER } from "../actions/types";

const initialState = {
  user: null,
  loading: true
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      switch (action.payload) {
        // Note: the API returns either a user object or an empty string ""
        // User not logged in
        case "":
          return {
            user: false,
            isAuthenticated: false,
            loading: false
          }
        // User is logged in
        default:
          return {
            user: action.payload,
            isAuthenticated: true,
            loading: false
          }
      }
    // Case that the request hasn't returned yet
    default:
      return state;

  }
};