import Axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from './types';

export function loginUser(dateToSubmit) {

    const request = Axios.post('/api/users/login', dateToSubmit)
      .then(response => response.data)
      return {
          type: LOGIN_USER,
          payload: request
      }
}

export function registerUser(dateToSubmit) {

    const request = Axios.post('/api/users/register', dateToSubmit)
      .then(response => response.data)
      return {
          type: REGISTER_USER,
          payload: request
      }
}

export function auth() {

    const request = Axios.get('/api/users/auth')
      .then(response => response.data)
      return {
          type: AUTH_USER,
          payload: request
      }
}