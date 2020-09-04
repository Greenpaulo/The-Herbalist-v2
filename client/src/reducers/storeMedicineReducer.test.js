import { STORE_MEDICINE } from "../actions/types";
import storeMedicineReducer from "./storeMedicineReducer";

describe('storeMedicineReducer', () => {
  const initialState = {
    user: '',
    patientName: '',
    date: '',
    herbs: [
      { name: '', dosage: '' },
      { name: '', dosage: '' },
      { name: '', dosage: '' },
      { name: '', dosage: '' },
      { name: '', dosage: '' },
      { name: '', dosage: '' },
      { name: '', dosage: '' },
    ],
    notes: ''
  }

  it('should return the initial state by default', () => {
    expect(storeMedicineReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle STORE_MEDICINE', () => {
    expect(storeMedicineReducer(initialState, { type: STORE_MEDICINE, payload: "" })).toEqual("")
  })
})