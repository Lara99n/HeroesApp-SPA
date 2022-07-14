import React, { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

import { types } from "../types/types";

/*setItem(): este método se usa para agregar una clave y un valor a localStorage.
getItem(): este método se usa para obtener un elemento de localStorage usando la clave.
removeItem(): esta técnica se utiliza para eliminar un elemento de localStorage en función de su clave.
clear(): esta técnica se utiliza para eliminar todas las instancias de localStorage.
key(): Cuando proporciona un número, ayuda en la recuperación de una clave localStorage.*/

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    logged: !!user,
    user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = (name = "") => {
    const user = { id: "ABC", name };

    const action = { type: types.login, payload: user };

    localStorage.setItem("user", JSON.stringify(user));

    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("user");
    const action = { type: types.logout };
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
