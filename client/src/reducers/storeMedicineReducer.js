import { STORE_MEDICINE } from '../actions/types';

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

export default function (state = initialState, action) {
  switch (action.type) {
    case STORE_MEDICINE:
      return action.payload;
    default:
      return state;
  }
}