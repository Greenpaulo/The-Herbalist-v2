import { FETCH_USER } from "../actions/types";
import authReducer from "./authReducer";

describe('authReducer', () => {
  const initialState = {
    user: null,
    loading: true
  }

  it('should return the initial state by default', () => {
    expect(authReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle FETCH_USER when user is not logged in', () => {
    expect(authReducer(initialState, { type: FETCH_USER, payload: ""})).toEqual({
      user: false,
      isAuthenticated: false,
      loading: false})
  })
})