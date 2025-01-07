import { PuzzleTemplate } from "../interfaces/PuzzleTemplate";

const pixelTemplate2: PuzzleTemplate = {
  noOfRows: 5,
  noOfColumns: 5,
  colorMap: { 1: "#e5e5e5", 2: "#ee92a4", 3: "#000" },
  template: [
    // row - 1
    1, 2, 3, 2, 1,
    // row - 2
    1, 1, 1, 1, 1,
    // row - 3
    1, 3, 1, 3, 1,
    // row - 4
    1, 1, 2, 1, 1,
    // row - 5
    3, 1, 1, 1, 3,
  ],
};

// 5x5 pixel art
export default pixelTemplate2;
