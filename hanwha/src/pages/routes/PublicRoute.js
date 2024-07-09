import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PublicRoute = () => {
  const isLogin = localStorage.getItem('token');
  return isLogin ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
