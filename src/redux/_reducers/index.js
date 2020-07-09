import { combineReducers } from 'redux';

import { signupReducer } from './signup.reducer';
import { authReducer } from './auth.reducer';
import { alertReducer } from './alert.reducer';

const rootReducer = combineReducers({
  authReducer,
  signupReducer,
  alertReducer,
});

export default rootReducer;
