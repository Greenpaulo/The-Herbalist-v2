import axios from 'axios';
import { FETCH_USER, FETCH_CATEGORY, FETCH_HERB } from './types';

// Action creator to check whether the user is logged in.
export const fetchUser = () => {
  return dispatch => {
    axios.get('/api/current_user')
      .then(res => { dispatch({ type: FETCH_USER, payload: res.data }) });
  };
};

// Action creator to fetch the condition lists based on the category chosen.
export const fetchCategory = (keyword) => {
  return dispatch => {
    axios.get(`/api/conditions?${keyword}`)
      .then(res => {
        dispatch({ type: FETCH_CATEGORY, payload: res.data })
      });
  };
};

// Action creator to fetch a herb's materia medica entry
export const fetchHerb = (herb) => {
  return dispatch => {
    axios.get(`/api/herb?${herb}`)
      .then(res => dispatch({ type: FETCH_HERB, payload: res.data }))
  };
};
