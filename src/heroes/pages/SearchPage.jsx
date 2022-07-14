import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";

import { HeroCard } from "../components";
import { useForm } from "../../hook/useForm";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: "",
  });
  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);

    onResetForm();
  };

  return (
    <>
      <div className="contenedorForm">
        <div className="col-5">
          <form className="formulario" onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Buscar..."
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={onInputChange}
              autoComplete="off"
            />
            <br />
            <button className="button-form">🔍</button>
          </form>
        </div>
        <div
          className="alert alert-primary animate__animated animate__fadeIn alertaBuscar"
          style={{ display: showSearch ? "" : "none" }}
        >
          Buscar SuperHeroe
        </div>
        <div
          className="alert alert-danger animate__animated animate__fadeIn alerta"
          style={{ display: showError ? "" : "none" }}
        >
          {" "}
          No encontramos al heroe {q}
        </div>
        <div className="cartaSuperHeroe ">
          {heroes.map((e) => (
            <HeroCard key={e.id} {...e} />
          ))}
        </div>
      </div>
    </>
  );
};
