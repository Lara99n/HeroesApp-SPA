import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPages } from "../auth/pages/LoginPages";
import { DcPage } from "../heroes/pages/DcPage";
import { MarvelPage } from "../heroes/pages/MarvelPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/marvel" element={<MarvelPage />} />
        <Route path="/dc" element={<DcPage />} />

        <Route path="/login" element={<LoginPages />} />

        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  );
};
