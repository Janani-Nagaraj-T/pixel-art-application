import { PuzzleTemplate } from "../interfaces/PuzzleTemplate";

const pixelTemplate4: PuzzleTemplate = {
  noOfRows: 5,
  noOfColumns: 5,
  colorMap: { 1: "#8d6933", 2: "#000", 3: "#e5e5e5", 4: "#614832" },
  template: [
    // row - 1
    2, 1, 2, 1, 2,
    // row - 2
    2, 1, 1, 1, 2,
    // row - 3
    1, 2, 1, 2, 1,
    // row - 4
    1, 1, 4, 1, 1,
    // row - 5
    1, 1, 3, 1, 1,
  ],
};

// 5x5 pixel art
export default pixelTemplate4;
