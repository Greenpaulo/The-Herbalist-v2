import axios from 'axios';
import { FETCH_USER, FETCH_CATEGORY, FETCH_HERB, FETCH_HERB_LIST, CREATE_MEDICINE, FETCH_MEDICINE_LIST, STORE_MEDICINE } from './types';

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

// Action creator to fetch the list of herb names that are in the DB
export const fetchHerbList = () => {
  return dispatch => {
    axios.get('/api/herb_list')
      .then(res => dispatch({ type: FETCH_HERB_LIST, payload: res.data }))
  };
};

//Action creator to create a medicine/prescription in the database
export const createMedicine = (history, values) => {
  return dispatch => {
    axios.post('/api/medicine', { values })
      .then(res => {
        dispatch({ type: CREATE_MEDICINE, payload: res.data })
      })
    history.push('/cabinet');
  };
};

// Action creator to fetch user created medicines from the DB
export const fetchMedicineList = () => {
  return dispatch => {
    axios.get('/api/medicine_list')
      .then(res => {
        dispatch({ type: FETCH_MEDICINE_LIST, payload: res.data })
      })
  }
}

// Action creator to store a single medicine prescription in the redux store
export const storeMedicine = (medicine) => {
  return ({ type: STORE_MEDICINE, payload: medicine })

};

// Action creator to update a medicine prescription in the DB
export const updateMedicine = (history, medicineID, values) => {
  return dispatch => {
    axios.put('/api/medicine', { medicineID, values })
      .then(res => dispatch({ type: STORE_MEDICINE, payload: res.data }))
    history.push('/cabinet');
  };
};
