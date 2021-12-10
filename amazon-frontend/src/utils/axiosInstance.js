import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/v1`,
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
});

export default axiosInstance;
