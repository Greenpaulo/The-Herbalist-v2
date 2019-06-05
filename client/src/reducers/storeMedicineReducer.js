import { STORE_MEDICINE } from '../actions/types';

// const intialState = {
//   user: '',
//   patientName: '',
//   date: '',
//   herbs: [],
//   notes: ''

// }

export default function (state = null, action) {
  switch (action.type) {
    case STORE_MEDICINE:
      return action.payload;
    default:
      return state;
  }
}