import axios from 'axios';

export default function setAuthToken(token) {
  if (token) {
    delete axios.defaults.headers.common.Authorization;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
}
