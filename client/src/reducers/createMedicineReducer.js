import { CREATE_MEDICINE } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case CREATE_MEDICINE:
      return action.payload
    default:
      return state;
  }
}