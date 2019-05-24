import { combineReducers } from 'redux';
import authReducer from './authReducer';
import conditionReducer from './conditionReducer';
import herbReducer from './herbReducer';

export default combineReducers({
  auth: authReducer,
  conditionList: conditionReducer,
  herb: herbReducer
});