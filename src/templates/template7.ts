import { PuzzleTemplate } from "../interfaces/PuzzleTemplate";

const pixelTemplate7: PuzzleTemplate = {
  noOfRows: 10,
  noOfColumns: 10,
  colorMap: {
    1: "#000",
    2: "#e5e5e5",
    3: "#bcdceb",
    4: "#de682c",
    5: "#dd0b11",
  },
  template: [
    // row - 1
    3, 3, 1, 1, 1, 1, 1, 1, 3, 3,
    // row - 2
    3, 3, 1, 1, 1, 1, 1, 1, 3, 3,
    // row - 3
    3, 3, 1, 1, 1, 1, 1, 1, 3, 3,
    // row - 4
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    // row - 5
    3, 2, 2, 2, 2, 2, 2, 2, 2, 3,
    // row - 6
    3, 2, 2, 1, 2, 2, 1, 2, 2, 3,
    // row - 7
    4, 4, 4, 4, 4, 2, 2, 2, 2, 3,
    // row - 8
    3, 2, 5, 2, 2, 2, 2, 5, 2, 3,
    // row - 9
    3, 2, 2, 5, 5, 5, 5, 2, 2, 3,
    // row - 10
    3, 3, 2, 2, 2, 2, 2, 2, 3, 3,
  ],
};

// 10x10 pixel art
export default pixelTemplate7;
