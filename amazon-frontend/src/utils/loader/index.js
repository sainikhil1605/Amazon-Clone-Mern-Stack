import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { LoaderOuterContainer } from './Loader.styles';

function Loader() {
  return (
    <LoaderOuterContainer>
      <CircularProgress />
    </LoaderOuterContainer>
  );
}
export default Loader;
