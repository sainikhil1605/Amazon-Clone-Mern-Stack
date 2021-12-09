import { Button, TextField } from '@mui/material';
import jwt from 'jwt-decode';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../logo.png';
import axiosInstance from '../../utils/axiosInstance';
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

  const onSubmit = async () => {
    setLoginError(null);

    const res = await axiosInstance.post('/login', {
      email,
      password,
    });
    if (res.status === 200) {
      const { name } = jwt(res.data.token);
      localStorage.setItem('name', name);
      localStorage.removeItem('token');
      localStorage.setItem('token', res.data.token);
      history.push('/');
    } else {
      setLoginError(res.response.data.error);
    }
  };
  return (
    <OuterContainer>
      <InnerContainer>
        <LoginContainer>
          <LoginImage src={logo} alt="Logo Image" />
          <LoginHeading>Login</LoginHeading>
          <LoginFieldContainer>
            {loginError && <p>{loginError}</p>}
            <TextField
              type="text"
              label="Email"
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
