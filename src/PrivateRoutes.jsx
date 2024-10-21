import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAccessToken } from './pages/auth/secureStorage';
import PagePaths from './PagePaths';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const accessToken = getAccessToken();

  return accessToken ? Component : <Navigate to={PagePaths.login} replace />;
};

export default PrivateRoute;
