import { PuzzleTemplate } from "../interfaces/PuzzleTemplate";

const pixelTemplate6: PuzzleTemplate = {
  noOfRows: 10,
  noOfColumns: 10,
  colorMap: {
    1: "#e5e5e5",
    2: "#f7f606",
    3: "#000",
    4: "#f365ac",
    5: "#f68b23",
  },
  template: [
    // row - 1
    1, 1, 1, 1, 2, 2, 1, 1, 1, 1,
    // row - 2
    1, 1, 2, 2, 2, 2, 2, 2, 1, 1,
    // row - 3
    1, 2, 2, 3, 2, 2, 3, 2, 2, 1,
    // row - 4
    1, 2, 4, 2, 2, 5, 2, 4, 2, 1,
    // row - 5
    1, 2, 2, 2, 5, 5, 2, 2, 2, 1,
    // row - 6
    1, 1, 2, 2, 2, 2, 2, 2, 1, 1,
    // row - 7
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    // row - 8
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    // row - 9
    1, 2, 2, 2, 2, 2, 2, 2, 2, 1,
    // row - 10
    1, 1, 2, 5, 2, 2, 5, 2, 1, 1,
  ],
};

// 10x10 pixel art
export default pixelTemplate6;
