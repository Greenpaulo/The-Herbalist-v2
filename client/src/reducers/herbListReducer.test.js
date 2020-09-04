import { FETCH_HERB_LIST } from '../actions/types';
import herbListReducer from "./herbListReducer";

describe('herbListReducer', () => {

  it('should return the initial state by default', () => {
    expect(herbListReducer(undefined, {})).toEqual(null)
  })

  it('should handle FETCH_HERB_LIST', () => {
    expect(herbListReducer(undefined, { type: FETCH_HERB_LIST, payload: {} })).toEqual({})
  })
})