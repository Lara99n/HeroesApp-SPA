import React from "react";
import { HeroList } from "../components";
import "./style.css";
export const DcPage = () => {
  return (
    <>
      <h1 className="dc animate__animated animate__pulse animate__infinite">
        <span className="colorM">DC</span> Comics
      </h1>
      <br />
      <HeroList publisher="DC Comics" />
    </>
  );
};
