import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import "./styles.css";

export const LoginPages = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";

    login("Lara Albornoz");

    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="">
      <button
        onClick={onLogin}
        className=" buttonIngresar animate__animated animate__zoomIn"
      >
        Ingresar
      </button>
    </div>
  );
};
