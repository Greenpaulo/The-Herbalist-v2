import { FETCH_CATEGORY } from '../actions/types';
import conditionReducer from "./conditionReducer";

describe('conditionReducer', () => {

  it('should return the initial state by default', () => {
    expect(conditionReducer(undefined, {})).toEqual({})
  })

  it('should handle FETCH_CATEGORY', () => {
    expect(conditionReducer(undefined, { type: FETCH_CATEGORY, payload: {
      category: "",
      conditions: []
    } })).toEqual({
      category: "",
      conditions: []
    })
  })
})