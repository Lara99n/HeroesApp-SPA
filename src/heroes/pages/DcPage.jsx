import React from "react";
import { HeroList } from "../components";
import "./style.css";
export const DcPage = () => {
  return (
    <>
      <h1 className="dc">DC Comics 🦸</h1>
      <br />
      <HeroList publisher="DC Comics" />
    </>
  );
};
