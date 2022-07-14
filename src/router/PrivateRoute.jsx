import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../auth";

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);

  /* codigo para cuando cierro la sesion y la vuelvo a abrir que me abra donde me quede anteriormente y no me redirija a la pagina principal */
  const { pathname, search } = useLocation();

  const lastPath = pathname + search;
  localStorage.setItem("lastPath", lastPath);

  return logged ? children : <Navigate to="/login" />;
};
