import axios from 'axios';

// Read from .env
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

console.log('Base URL:', BASE_URL); // You can log to verify it's working

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
