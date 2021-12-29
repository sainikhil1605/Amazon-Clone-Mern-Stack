import axios from 'axios';
import { createBrowserHistory } from 'history';
import { toast } from 'react-toastify';
import store from './Redux/store';

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/v1`,
});

axiosInstance.interceptors.request.use((req) => {
  req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return req;
});

axiosInstance.interceptors.response.use(
  (res) => res,

  (err) => {
    if (err.response.data.err === 'jwt expired') {
      store.dispatch({ type: 'LOGOUT' });
      createBrowserHistory().push('/login');
      window.location.reload();
      toast.warning('Session Expired, Please Login Again');
    }
  }
);

export default axiosInstance;
