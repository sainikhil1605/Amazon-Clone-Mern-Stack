import axios from 'axios';
import { createBrowserHistory } from 'history';
import { toast } from 'react-toastify';
import store from './store';

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

const apiGetCall = async (url) => {
  try {
    const response = await axiosInstance.get(url);
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};
const apiPostCall = async (url, payload) => {
  try {
    const response = await axiosInstance.post(url, payload);
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};
const apiDeleteCall = async (url) => {
  try {
    const response = await axiosInstance.delete(url);
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};
const apiPatchCall = async (url, payload) => {
  try {
    const response = await axiosInstance.patch(url, payload);
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};
export { axiosInstance, apiGetCall, apiPostCall, apiDeleteCall, apiPatchCall };
