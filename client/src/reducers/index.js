import { combineReducers } from 'redux';
import authReducer from './authReducer';
import conditionReducer from './conditionReducer';
import herbReducer from './herbReducer';
import herbListReducer from './herbListReducer';
import createMedicineReducer from './createMedicineReducer';
import fetchMedicinesReducer from './fetchMedicinesReducer';
import storeMedicineReducer from './storeMedicineReducer';

export default combineReducers({
  auth: authReducer,
  conditionList: conditionReducer,
  herb: herbReducer,
  herbList: herbListReducer,
  medicine: createMedicineReducer,
  medicineList: fetchMedicinesReducer,
  storedMedicine: storeMedicineReducer
});