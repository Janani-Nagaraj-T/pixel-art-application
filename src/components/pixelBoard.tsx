import React, { useState } from "react";
import { PuzzleTemplate } from "../interfaces/PuzzleTemplate";

interface PixelBoardProps {
  puzzleData: PuzzleTemplate;
  crayonColor: number;
}

const PixelBoard = (props: PixelBoardProps) => {
  const { puzzleData, crayonColor } = props;
  const { colorMap, template, noOfColumns, noOfRows } = puzzleData;

  const initialGridState = template.reduce((acc, _, index) => {
    return { ...acc, [index]: false };
  }, {});
  const [gridState, setGridState] = useState(initialGridState);

  const getPixel = (colorToUse: number, index: number) => {
    const bgColor = colorMap[colorToUse] ?? "transparent";

    const onClick = () => {
      if (crayonColor === colorToUse) {
        setGridState({ ...gridState, [index]: true });
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

const Styles: Record<string, React.CSSProperties> = {
  pixelGrid: {
    display: "grid",
    width: "200px",
    height: "200px",
    border: "0.5px solid #000",
  },
  pixelBtn: {
    border: "0.5px solid #000",
    width: "100%",
    height: "100%",
  },
};

export default PixelBoard;
