import axios from 'axios';

console.log('first', process.env.REACT_APP_API)
const api = axios.create({
  baseURL: process.env.REACT_APP_API
});

export default api;