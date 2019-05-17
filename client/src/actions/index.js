import axios from 'axios';
import { FETCH_USER } from './types';

// Action creator to check whether the user is logged in.
export const fetchUser = () => {
  return dispatch => {
    axios.get('/api/current_user')
      .then(res => { dispatch({ type: FETCH_USER, payload: res.data }) });
  };
};
