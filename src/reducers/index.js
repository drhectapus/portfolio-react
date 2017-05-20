import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { ACCOUNT_SAVE_SUCCESS } from '../actions/index';
import MailSentReducer from './reducer_mail_sent';

const rootReducer = combineReducers({
  form: formReducer,
  mailSent: MailSentReducer
});

export default rootReducer;
