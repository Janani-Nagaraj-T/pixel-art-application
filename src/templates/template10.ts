import { PuzzleTemplate } from "../interfaces/PuzzleTemplate";

const pixelTemplate10: PuzzleTemplate = {
  noOfRows: 11,
  noOfColumns: 11,
  colorMap: {
    1: "#e90401",
    2: "#007a04",
    3: "#e5e5e5",
    4: "#f3d00e",
  },
  template: [
    // row - 1
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    // row - 2
    3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3,
    // row - 3
    3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3,
    // row - 4
    3, 3, 1, 1, 2, 2, 2, 1, 1, 3, 3,
    // row - 5
    3, 1, 4, 1, 1, 2, 1, 1, 4, 1, 3,
    // row - 6
    3, 1, 1, 1, 4, 1, 4, 1, 1, 1, 3,
    // row - 7
    3, 3, 1, 4, 1, 1, 1, 4, 1, 3, 3,
    // row - 8
    3, 3, 3, 1, 1, 4, 1, 1, 3, 3, 3,
    // row - 9
    3, 3, 3, 3, 1, 1, 1, 3, 3, 3, 3,
    // row - 10
    3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3,
    // row - 11
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  ],
};

// 11x11 pixel art
export default pixelTemplate10;
