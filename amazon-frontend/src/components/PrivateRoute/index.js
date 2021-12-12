/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { LoginContext } from '../../Context/Login/Provider';

function PrivateRoute({ children, ...rest }) {
  const [state] = React.useContext(LoginContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        state.isLoggedIn ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
}
export default PrivateRoute;
