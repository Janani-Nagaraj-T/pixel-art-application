import { PuzzleTemplate } from "../interfaces/PuzzleTemplate";

const pixelTemplate3: PuzzleTemplate = {
  noOfRows: 5,
  noOfColumns: 5,
  colorMap: { 1: "#e5e5e5", 2: "#000", 3: "#83888b" },
  template: [
    // row - 1
    3, 2, 2, 2, 3,
    // row - 2
    3, 3, 3, 3, 3,
    // row - 3
    3, 2, 3, 2, 3,
    // row - 4
    1, 1, 2, 1, 1,
    // row - 5
    2, 1, 1, 1, 2,
  ],
};

// 5x5 pixel art
export default pixelTemplate3;
