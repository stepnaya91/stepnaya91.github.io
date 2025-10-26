import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
import { loginSelectors } from '../../store/slices/login';

export type AdminRouteProps = {
  children: React.ReactNode;
}

export const AdminRoute: FC<AdminRouteProps> = ({ children }) => {
  const isAdmin = useSelector(loginSelectors.admin);
  const location = useLocation();
  if(isAdmin) return <>{children}</>;
  return <Navigate to="/AdminOnly" state={{ from: location }} replace />;
};
