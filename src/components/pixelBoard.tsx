import React, { useState } from "react";
import { PuzzleTemplate } from "../interfaces/PuzzleTemplate";
import { StylesObj } from "../interfaces/Style";
import { useDispatch } from "react-redux";
import { setLevel } from "../features/gameLevel/gameLevel.ts";
import { useNavigate } from "react-router-dom";

interface PixelBoardProps {
  puzzleData: PuzzleTemplate;
  crayonColor: number;
  level: number;
}

const PixelBoard = (props: PixelBoardProps) => {
  const { puzzleData, crayonColor, level } = props;
  const { colorMap, template, noOfColumns, noOfRows } = puzzleData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialGridState = template.reduce((acc, _, index) => {
    return { ...acc, [index]: false };
  }, {});
  const [gridState, setGridState] = useState(initialGridState);

  const getPixel = (colorToUse: number, index: number) => {
    const bgColor = colorMap[colorToUse] ?? "transparent";

    const onClick = () => {
      if (crayonColor === colorToUse) {
        const newGridState = { ...gridState, [index]: true };
        setGridState(newGridState);
        const isDone = !Object.values(newGridState).includes(false);
        if (isDone) {
          dispatch(setLevel(level + 1));
          navigate(-1);
        }
      }
    };

    const isColored = gridState[index];

    return (
      <button
        key={`gridItem-${index}`}
        style={{
          ...Styles.pixelBtn,
          backgroundColor: isColored ? bgColor : "#fff",
        }}
        disabled={isColored}
        onClick={onClick}
      >
        {isColored ? "" : colorToUse}
      </button>
    );
  };

  return (
    <div
      style={{
        ...Styles.pixelGrid,
        gridTemplateColumns: `repeat(${noOfColumns}, 1fr)`,
        gridTemplateRows: `repeat(${noOfRows}, 1fr)`,
      }}
    >
      {template.map(getPixel)}
    </div>
  );
};

const Styles: StylesObj = {
  pixelGrid: {
    display: "grid",
    width: "250px",
    height: "250px",
    border: "0.5px solid #000",
  },
  pixelBtn: {
    border: "0.5px solid #000",
    width: "100%",
    height: "100%",
  },
};

export default PixelBoard;
