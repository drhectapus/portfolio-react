import axios from 'axios';
import { reduxForm, reset } from 'redux-form';

export const MAIL_SENT = 'MAIL_SENT';

const ROOT_URL='https://formspree.io/'
const EMAIL = 'drjosephliu@gmail.com'

export function sendMail(values, callback) {
  const request = axios.post(`${ROOT_URL}${EMAIL}`, values);

  return (dispatch) => {
    request.then(response => {
      dispatch({
        type: MAIL_SENT,
        payload: true
      });
      dispatch(reset('ContactForm'));
    });
  };
}
