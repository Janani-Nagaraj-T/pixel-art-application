import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home.tsx";
import PuzzlePage from "../pages/puzzle.tsx";
import pixelTemplate1 from "../templates/template1.ts";
import { LevelStatus } from "../utils/levelStatus.ts";

const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/puzzle"
          element={
            <PuzzlePage
              puzzleData={pixelTemplate1}
              level={1}
              levelStatus={LevelStatus.unlocked}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoute;
