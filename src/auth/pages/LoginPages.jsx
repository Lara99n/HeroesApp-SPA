import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginPages = () => {
  const navigate = useNavigate();

  const onLogin = () => {
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
