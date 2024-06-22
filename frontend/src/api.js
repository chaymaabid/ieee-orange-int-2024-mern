import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL // Use environment variable
});

export default api;
