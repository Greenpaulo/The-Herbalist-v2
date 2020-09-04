import { CREATE_MEDICINE } from '../actions/types';
import createMedicineReducer from "./createMedicineReducer";

describe('createMedicineReducer', () => {

  it('should return the initial state by default', () => {
    expect(createMedicineReducer(undefined, {})).toEqual(null)
  })

  it('should handle CREATE_MEDICINE', () => {
    expect(createMedicineReducer(undefined, { type: CREATE_MEDICINE, payload: {} })).toEqual({})
  })
})