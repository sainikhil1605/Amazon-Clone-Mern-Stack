/* eslint-disable no-confusing-arrow */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ children, ...rest }) {
  const state = useSelector((tempstate) => tempstate.login);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        // eslint-disable-next-line implicit-arrow-linebreak
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
