import { combineReducers } from 'redux';
import * as LoggedOut from '../../LoginScreens/LoggedOut';
import * as Navigation from './navigation';
export default combineReducers(Object.assign(
  LoggedOut,
  Navigation,
));
