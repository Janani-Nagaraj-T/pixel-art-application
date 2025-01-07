import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home.tsx";
import PuzzlePage from "../pages/puzzle.tsx";

const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/puzzle" element={<PuzzlePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoute;
