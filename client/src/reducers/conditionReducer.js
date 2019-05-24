import { FETCH_CATEGORY } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_CATEGORY:
      return {
        category: action.payload.category,
        conditions: action.payload.conditions
      };
    default:
      return state;
  }
}