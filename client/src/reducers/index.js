import { combineReducers } from 'redux';
import authReducer from './authReducer';
import conditionReducer from './conditionReducer';
import herbReducer from './herbReducer';
import herbListReducer from './herbListReducer';
import medicineReducer from './medicineReducer';

export default combineReducers({
  auth: authReducer,
  conditionList: conditionReducer,
  herb: herbReducer,
  herbList: herbListReducer,
  medicine: medicineReducer
});