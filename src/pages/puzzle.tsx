import React from "react";
import { PuzzleTemplate } from "../interfaces/PuzzleTemplate";
import { LevelStatus } from "../utils/levelStatus";
import PixelBoard from "../components/pixelBoard.tsx";
import ColorPallete from "../components/colorPallete.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../app/store.ts";

interface PuzzlePageProps {
  puzzleData: PuzzleTemplate;
  level: number;
  levelStatus: LevelStatus;
}

const PuzzlePage: React.FC<PuzzlePageProps> = (props) => {
  const { puzzleData, level, levelStatus } = props;
  const selectedCrayon = useSelector(
    (state: RootState) => state.selectedCrayon
  );
  return (
    <div style={Styles.puzzlePage}>
      <div style={Styles.banner}> Level {level} </div>
      <div style={Styles.puzzleWrapper}>
        <PixelBoard puzzleData={puzzleData} crayonColor={selectedCrayon} />
        <ColorPallete colorMap={puzzleData.colorMap} />
      </div>
    </div>
  );
};

const Styles: Record<string, React.CSSProperties> = {
  puzzlePage: {
    width: "100vw",
    height: "100vh",
  },
  banner: {
    width: "100%",
    height: "3rem",
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#000",
    backgroundColor: "#eee",
    position: "sticky",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  puzzleWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2rem",
  },
};

export default PuzzlePage;
