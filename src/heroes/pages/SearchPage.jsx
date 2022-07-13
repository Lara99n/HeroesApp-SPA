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
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Buscar heroe"
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={onInputChange}
              autoComplete="off"
            />
            <br />
            <button className="button-form">Buscar</button>
          </form>
        </div>
        <div className="noPersonaje">
          {heroes.length === 0 && <div>No se encontro al heroe {q}:(</div>}
        </div>

        <div className="cartaSuperHeroe">
          {heroes.map((e) => (
            <HeroCard key={e.id} {...e} />
          ))}
        </div>
      </div>
    </>
  );
};
