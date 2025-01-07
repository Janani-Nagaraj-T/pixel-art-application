import { PuzzleTemplate } from "../interfaces/PuzzleTemplate";

const pixelTemplate8: PuzzleTemplate = {
  noOfRows: 10,
  noOfColumns: 10,
  colorMap: {
    1: "#e5e5e5",
    2: "#1167a0",
    3: "#bcdceb",
    4: "#aaa",
    5: "#000",
  },
  template: [
    // row - 1
    3, 3, 3, 4, 4, 4, 4, 3, 3, 3,
    // row - 2
    3, 3, 4, 4, 4, 4, 4, 4, 3, 3,
    // row - 3
    3, 4, 1, 1, 4, 4, 1, 1, 4, 3,
    // row - 4
    3, 4, 1, 2, 4, 4, 2, 1, 4, 3,
    // row - 5
    3, 4, 4, 4, 5, 5, 4, 4, 4, 3,
    // row - 6
    3, 4, 4, 5, 5, 5, 5, 4, 4, 3,
    // row - 7
    3, 3, 4, 4, 4, 4, 4, 4, 3, 3,
    // row - 8
    3, 4, 4, 1, 1, 1, 1, 4, 4, 3,
    // row - 9
    4, 4, 1, 1, 1, 1, 1, 1, 4, 4,
    // row - 10
    4, 1, 1, 1, 1, 1, 1, 1, 1, 4,
  ],
};

// 10x10 pixel art
export default pixelTemplate8;
