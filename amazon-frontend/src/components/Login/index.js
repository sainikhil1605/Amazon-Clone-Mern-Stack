import { Button, TextField } from '@material-ui/core';
import jwt from 'jwt-decode';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../logo.png';
import { axiosInstance } from '../../utils/axiosInstance';
import {
  InnerContainer,
  LoginContainer,
  LoginFieldContainer,
  LoginHeading,
  LoginImage,
  OuterContainer,
} from './Login.styles';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoginError(null);
    if (!email || !password) {
      setLoginError('Please enter email and password');
      return;
    }
    try {
      const res = await axiosInstance.post('/login', {
        email,
        password,
      });

      if (res.status === 200) {
        const { name } = jwt(res.data.token);

        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: { token: res.data.token, name },
        });

        const response = await axiosInstance.get('/cart');

        if (response.status === 200 && response.data.cart !== null) {
          dispatch({
            type: 'SET_CART',
            payload: response.data.cart.products,
          });
        }

        if (location.state && location.state.from.pathname !== '/') {
          history.push(location.state.from.pathname);
        } else {
          history.push('/');
        }
      }
    } catch (err) {
      setLoginError(err.response.data.error);
      dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data.error });
    }
  };
  return (
    <OuterContainer>
      <InnerContainer>
        <LoginContainer>
          <form onSubmit={onSubmit}>
            <LoginImage src={logo} alt="Logo Image" />
            <LoginHeading>Login</LoginHeading>
            <LoginFieldContainer>
              {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </LoginFieldContainer>
            <LoginFieldContainer>
              <TextField
                type="password"
                label="Password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </LoginFieldContainer>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={(e) => onSubmit(e)}
            >
              Login
            </Button>
          </form>
          <div>
            New User?
            <Button onClick={() => history.push('/signUp')}>SingUp</Button>
          </div>
        </LoginContainer>
      </InnerContainer>
    </OuterContainer>
  );
}

export default Login;
