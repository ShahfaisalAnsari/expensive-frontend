import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';

const AuthRedirect = () => {
  const { isAuth } = useAuth();

  return <Navigate to={isAuth ? '/home' : '/login'} replace />;
};

export default AuthRedirect;