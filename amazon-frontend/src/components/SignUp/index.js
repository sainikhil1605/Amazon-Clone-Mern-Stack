import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
} from '../Login/Login.styles';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [singUpError, setSignUpError] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   document
  //     .getElementById('signUpButton')
  //     .addEventListener('keyup', (event) => {
  //       if (event.keyCode === 13) {
  //         event.preventDefault();
  //         document.getElementById('signUpButton').click();
  //       }
  //     });
  // }, []);
  const onSubmit = async () => {
    setSignUpError(null);
    if (!name || !email || !password) {
      setSignUpError('Please fill all the fields');
      return;
    }
    try {
      const res = await axiosInstance.post('/signUp', {
        name,
        email,
        password,
      });
      if (res.status === 200) {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: { token: res.data.token, name },
        });

        history.push('/');
      } else {
        setSignUpError(res.response.data.error);
      }
    } catch (error) {
      if (error.response.data.err.includes('duplicate')) {
        setSignUpError('Email already exists');
      } else {
        setSignUpError(error.response.data.err);
      }
    }
  };
  return (
    <OuterContainer>
      <InnerContainer>
        <LoginContainer>
          <LoginImage src={logo} alt="Logo Image" />
          <LoginHeading>Sign Up</LoginHeading>
          <LoginFieldContainer>
            {singUpError && <p>{singUpError}</p>}
            <TextField
              type="text"
              label="Name"
              id="Name"
              variant="outlined"
              fullWidth
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </LoginFieldContainer>
          <LoginFieldContainer>
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
            id="signUpButton"
            onKeyDown={(e) => e.which === 13 && onSubmit()}
          >
            Sign Up
          </Button>
        </LoginContainer>
      </InnerContainer>
    </OuterContainer>
  );
}

export default SignUp;
