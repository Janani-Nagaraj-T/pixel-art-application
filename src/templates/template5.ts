import { PuzzleTemplate } from "../interfaces/PuzzleTemplate";

const pixelTemplate4: PuzzleTemplate = {
  noOfRows: 5,
  noOfColumns: 5,
  colorMap: { 1: "#000", 2: "#ebcf57", 3: "#e58d00" },
  template: [
    // row - 1
    1, 2, 2, 2, 1,
    // row - 2
    2, 2, 2, 2, 2,
    // row - 3
    2, 1, 2, 1, 2,
    // row - 4
    2, 2, 3, 2, 2,
    // row - 5
    1, 2, 2, 2, 1,
  ],
};

// 5x5 pixel art
export default pixelTemplate4;
