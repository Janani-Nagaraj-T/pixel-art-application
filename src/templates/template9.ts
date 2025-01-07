import { PuzzleTemplate } from "../interfaces/PuzzleTemplate";

const pixelTemplate9: PuzzleTemplate = {
  noOfRows: 10,
  noOfColumns: 10,
  colorMap: {
    1: "#e5e5e5",
    2: "#f23f39",
    3: "#99502f",
    4: "#78838a",
    5: "#a5a8a9",
    6: "#f4dc04",
    7: "#000",
  },
  template: [
    // row - 1
    1, 1, 1, 1, 2, 2, 2, 1, 1, 1,
    // row - 2
    1, 1, 1, 2, 2, 2, 1, 2, 1, 1,
    // row - 3
    1, 1, 2, 2, 2, 2, 2, 1, 1, 1,
    // row - 4
    1, 1, 7, 1, 7, 1, 4, 1, 1, 1,
    // row - 5
    3, 1, 4, 1, 1, 1, 4, 1, 3, 1,
    // row - 6
    3, 1, 6, 2, 6, 2, 6, 1, 3, 3,
    // row - 7
    1, 5, 4, 7, 1, 2, 4, 3, 1, 1,
    // row - 8
    1, 4, 5, 1, 1, 6, 1, 4, 1, 1,
    // row - 9
    1, 4, 5, 7, 1, 2, 1, 4, 1, 1,
    // row - 10
    1, 1, 4, 5, 5, 5, 4, 1, 1, 1,
  ],
};

// 11x11 pixel art
export default pixelTemplate9;
