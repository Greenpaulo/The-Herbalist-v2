import { CREATE_MEDICINE } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case CREATE_MEDICINE:
      console.log('inside reducer:', action.payload)
      return action.payload;

    default:
      return state;
  }
}