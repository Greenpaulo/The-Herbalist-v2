import { FETCH_CATEGORY } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_CATEGORY:
      console.log('inside reducer', action.payload);
      return {
        category: action.payload.category,
        conditions: action.payload.conditions
      };
    default:
      return state;
  }
}