import React from "react";
import { HeroList } from "../components";

import "./style.css";

export const MarvelPage = () => {
  return (
    <>
      <h1 className="marvel animate__flash">Marvel Comics 🦸</h1>
      <br />

      <HeroList publisher="Marvel Comics" />
    </>
  );
};
