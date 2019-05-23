import axios from 'axios';
import { FETCH_USER, FETCH_CATEGORY } from './types';

// Action creator to check whether the user is logged in.
export const fetchUser = () => {
  return dispatch => {
    axios.get('/api/current_user')
      .then(res => { dispatch({ type: FETCH_USER, payload: res.data }) });
  };
};

// Action creator to fetch the condition lists based on the category chosen.
export const fetchCategory = (category) => {
  return dispatch => {
    axios.get(`/api/conditions?${category}`)
      .then(res => {
        console.log(res.data)
        dispatch({ type: FETCH_CATEGORY, payload: res.data })
      });
  };
};
