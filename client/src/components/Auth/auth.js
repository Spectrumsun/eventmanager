import axios from 'axios';

export default function setAuthToken(token) {
  if (token) {
    axios.defaults.headers.common.Authorization = token;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
}



// /redux/todos/index.js
/* import axios from "axios";  
let todoAxios = axios.create();

todoAxios.interceptors.request.use((config)=>{  
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
}) */