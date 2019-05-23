import { combineReducers } from 'redux';
import authReducer from './authReducer';
import conditionReducer from './conditionReducer';

export default combineReducers({
  auth: authReducer,
  conditionList: conditionReducer
});