import { type FC, type ComponentType } from "react";

import { Navigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";

interface PrivateRouteProps {
  Component: ComponentType;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ Component }) => {
  const { loginStatus } = useAuth();

  return loginStatus ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;
