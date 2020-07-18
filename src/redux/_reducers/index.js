import { combineReducers } from 'redux';

import { signupReducer } from './signup.reducer';
import { authReducer } from './auth.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authReducer,
  signupReducer,
  alert,
});

export default rootReducer;
