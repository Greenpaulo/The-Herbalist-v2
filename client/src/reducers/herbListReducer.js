import { FETCH_HERB_LIST } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_HERB_LIST:
      return action.payload;
    default:
      return state;
  };
};
