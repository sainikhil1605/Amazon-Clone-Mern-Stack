import { Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import {
  InnerContainer,
  LoginContainer,
  LoginFieldContainer,
  LoginHeading,
  OuterContainer
} from './Login.styles';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const [token, setToken] = useState(null);
  const onSubmit = () => {
    setLoginError(null);
    axios
      .post('http://localhost:4000/login', {
        userEmail: email,
        userPassword: password,
      })
      .then((res) => {
        setToken(res.data.token);
        console.log(res.data);
        localStorage.removeItem('token');
        localStorage.setItem('token', res.data.token);
        console.log(localStorage.getItem('token'));
      })
      .then(() => {
        axios
          .post('http://localhost:4000/get-cart', {
            token: localStorage.getItem('token'),
          })
          .then((res) => {
            console.log(res.data);
          });
      })
      .catch((err) => {
        console.log('hi');
        console.log(err.response.data.status);
        setLoginError(err.response.data.status);
      });
  };
  return (
    <OuterContainer>
      <InnerContainer>
        <LoginContainer>
          <LoginHeading>Login</LoginHeading>
          <LoginFieldContainer>
            {loginError && <p>{loginError}</p>}
            <TextField
              type="text"
              label="Login"
              varaint="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </LoginFieldContainer>
          <LoginFieldContainer>
            <TextField
              type="password"
              label="Password"
              varaint="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </LoginFieldContainer>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onSubmit()}
          >
            Login
          </Button>
        </LoginContainer>
      </InnerContainer>
    </OuterContainer>
  );
}

export default Login;
