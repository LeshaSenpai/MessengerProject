import React from "react";
import { Navigate } from "react-router-dom";

interface AuthorisationProps {
  children: React.ReactNode;
}

const Authorisation: React.FC<AuthorisationProps> = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? <>{children}</> : <Navigate to="/login" />;
};

export default Authorisation;
