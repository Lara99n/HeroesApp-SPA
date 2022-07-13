import React from "react";
import { Link } from "react-router-dom";
import "./HeroeCard.css";

export const HeroCard = ({ id, superhero, alter_ego }) => {
  const heroImage = `/assets/heroes/${id}.jpg`;

  return (
    <div className="contenedor">
      <div className="col">
        <Link to={`/hero${id}`}>
          <div className="card">
            <div className="row no-gutters">
              <div className="col-4">
                <img src={heroImage} className="card-img" alt={superhero} />
              </div>

              <div className="col-8">
                <div className="card-body">
                  <br />
                  <br />
                  <h2 className="card-title"> {superhero}</h2>
                </div>
                <p>{alter_ego}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
