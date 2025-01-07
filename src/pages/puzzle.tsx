import React from "react";
import { PuzzleTemplate } from "../interfaces/PuzzleTemplate";
import { LevelStatus } from "../utils/levelStatus";
import PixelBoard from "../components/pixelBoard.tsx";
import ColorPallete from "../components/colorPallete.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../app/store.ts";
import { useLocation } from "react-router-dom";

interface PuzzlePageProps {
  puzzleData: PuzzleTemplate;
  level: number;
  levelStatus: LevelStatus;
}

const PuzzlePage = () => {
  const data = useLocation().state;
  const { puzzleData, level, levelStatus } = data;
  const selectedCrayon = useSelector(
    (state: RootState) => state.selectedCrayon
  );
  return (
    <div style={Styles.puzzlePage}>
      <div style={Styles.banner}>
        <p style={Styles.headerTxt}> Level {level}</p>{" "}
      </div>
      <div style={Styles.puzzleWrapper}>
        <PixelBoard
          puzzleData={puzzleData}
          crayonColor={selectedCrayon}
          level={level}
        />
        <ColorPallete colorMap={puzzleData.colorMap} />
      </div>
    </div>
  );
};

const Styles: Record<string, React.CSSProperties> = {
  puzzlePage: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    backgroundImage: "radial-gradient(#fffedb, #ffd0d0)",
  },
  banner: {
    width: "100%",
    height: "5rem",
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#000",
    backgroundColor: "#eee",
    position: "fixed",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "linear-gradient(32deg, #ff9b00, #f7ff0d)",
  },
  headerTxt: {
    fontSize: "3rem",
    backgroundImage: "linear-gradient(red, blue)",
    color: "transparent",
    backgroundClip: "text",
    fontFamily: "Slackey, serif",
  },
  puzzleWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
};

export default PuzzlePage;
