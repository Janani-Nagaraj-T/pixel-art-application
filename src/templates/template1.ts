import { PuzzleTemplate } from "../interfaces/PuzzleTemplate";

const pixelTemplate1: PuzzleTemplate = {
  noOfRows: 5,
  noOfColumns: 5,
  colorMap: { 1: "#5c432c", 2: "#906a34", 3: "#333" },
  template: [
    // row - 1
    1, 1, 2, 1, 1,
    // row - 2
    1, 2, 2, 2, 1,
    // row - 3
    2, 3, 2, 3, 2,
    // row - 4
    2, 2, 3, 2, 2,
    // row - 5
    3, 2, 2, 2, 3,
  ],
};

// 5x5 pixel art
export default pixelTemplate1;
