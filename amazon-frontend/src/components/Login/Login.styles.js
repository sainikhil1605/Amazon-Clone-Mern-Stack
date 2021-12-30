import { Paper } from '@material-ui/core';
import styled from 'styled-components';

const OuterContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const InnerContainer = styled.div`
  margin: auto;
  max-width: 720px;
`;
const LoginContainer = styled(Paper)`
  @media (max-width: 780px) {
    padding: 20px 10px;
  }
  padding: 40px 40px;

  text-align: center;
  margin-top: 10px;
  border-radius: 4px;
  border-color: #b2c9ab !important;
`;
const LoginHeading = styled.h1`
  font-weight: 400;
  margin: 28px;
`;
const LoginFieldContainer = styled.div`
  margin-bottom: 28px;
`;
const LoginImage = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: 200px;
  margin-bottom: 15px;
`;
export {
  OuterContainer,
  InnerContainer,
  LoginContainer,
  LoginHeading,
  LoginFieldContainer,
  LoginImage,
};
