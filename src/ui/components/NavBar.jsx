import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

import "./NavBar.css";

export const Navbar = () => {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const onLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 black">
      <Link className="navbar-brand letras" to="/">
        Heroes
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              ` letras nav-link ${isActive ? "active" : ""}`
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              ` letras nav-link ${isActive ? "active" : ""}`
            }
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              ` letras nav-link ${isActive ? "active" : ""}`
            }
            to="/search"
          >
            Buscar
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="'nav-items nav-link text-primary letras">
            {user?.name}
          </span>

          <button onClick={onLogout} className="nav-item nav-link btn letras">
            Salir
          </button>
        </ul>
      </div>
    </nav>
  );
};
