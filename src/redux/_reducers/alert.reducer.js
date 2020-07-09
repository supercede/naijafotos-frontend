import { alertConstants } from '../_constants';

export function alertReducer(state = {}, action) {
  switch (action.type) {
    case alertConstants.ALERT_SUCCESS:
      return {
        type: 'alert-success',
        message: action.message,
      };
    case alertConstants.ALERT_ERROR:
      return {
        type: 'alert-danger',
        message: action.message,
      };
    case alertConstants.ALERT_CLEAR:
      return {};
    default:
      return state;
  }
}
