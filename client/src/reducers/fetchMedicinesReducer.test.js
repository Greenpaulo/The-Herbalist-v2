import { FETCH_MEDICINE_LIST } from '../actions/types';
import fetchMedicinesReducer from "./fetchMedicinesReducer";

describe('fetchMedicinesReducer', () => {

  it('should return the initial state by default', () => {
    expect(fetchMedicinesReducer(undefined, {})).toEqual(null)
  })

  it('should handle FETCH_MEDICINE_LIST', () => {
    expect(fetchMedicinesReducer(undefined, { type: FETCH_MEDICINE_LIST, payload: {} })).toEqual({})
  })
})