import { useMemo } from "react";
import React, { Navigate, useParams, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers";
import "animate.css";

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(id), [id]);
  console.log(hero);

  const onNavigateBack = () => {
    navigate(-1, {
      replace: true,
    });
  };

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>

      <div className="col-8">
        <div className="nombre">{hero.superhero}</div>
        <br />
        <div className="contenedorDetalle">
          <div className="heroes">
            <b>Publisher: </b>
            {hero.publisher}
          </div>
          <br />
          <div className="heroes">
            <b>Alter ego: </b>
            {hero.alter_ego}
          </div>
          <br />
          <div className="heroes">
            <b>Primera aparición: </b>
            {hero.first_appearance}
          </div>
          <br />
          <div className="heroes">
            <b className="mt-3"> Personajes: </b>
            {hero.characters}
          </div>
        </div>

        <button onClick={onNavigateBack} className="buton">
          Volver
        </button>
      </div>
    </div>
  );
};
