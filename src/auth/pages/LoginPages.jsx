import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPages = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogin = () => {
    login("Lara Albornoz");

    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="conainer mt-5 p-3">
      <h1>Login</h1>
      <hr />
      <button onClick={onLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};
