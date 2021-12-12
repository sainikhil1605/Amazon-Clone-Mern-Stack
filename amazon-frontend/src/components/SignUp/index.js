import { Button, TextField } from '@mui/material';
import jwt from 'jwt-decode';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginContext } from '../../Context/Login/Provider';
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
  const [state, dispatch] = React.useContext(LoginContext);
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
        const { name } = jwt(res.data.token);
        dispatch({
          type: 'LOGIN_SUCCES',
          payload: { token: res.data.token, name },
        });

        history.push('/');
      } else {
        setSignUpError(res.response.data.error);
      }
    } catch (error) {
      setSignUpError(error.response.data.err);
    }
  };
  return (
    <OuterContainer>
      <InnerContainer>
        <LoginContainer>
          <LoginImage src={logo} alt="Logo Image" />
          <LoginHeading>Login</LoginHeading>
          <LoginFieldContainer>
            {singUpError && <p>{singUpError}</p>}
            <TextField
              type="text"
              label="Name"
              variant="outlined"
              fullWidth
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
          >
            Login
          </Button>
        </LoginContainer>
      </InnerContainer>
    </OuterContainer>
  );
}

export default SignUp;
