import React from "react";
import { LevelStatus } from "../utils/levelStatus.ts";
import { StylesObj } from "../interfaces/Style";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useNavigate } from "react-router-dom";
import { allTemplates } from "../templates/allTemplates.ts";

interface LevelCardProps {
  level: number;
}
const LevelCard: React.FC<LevelCardProps> = (props) => {
  const { level } = props;
  const navigate = useNavigate();

  const currLevel = useSelector(
    (state: RootState) => state.gameLevel.currentLevel
  );
  const levelStatus = (() => {
    if (level === currLevel) {
      return LevelStatus.unlocked;
    } else if (level > currLevel) {
      return LevelStatus.locked;
    } else {
      return LevelStatus.completed;
    }
  })();
  const getBgColor = () => {
    switch (levelStatus) {
      case LevelStatus.unlocked:
        return "linear-gradient(45deg, #1476a0, #aff9ff)";
      case LevelStatus.completed:
        return "linear-gradient(45deg, #287847, #b3f07a)";
      default:
        return "linear-gradient(45deg, #535556, #d9d9d9)";
    }
  };
  const getIcon = () => {
    switch (levelStatus) {
      case LevelStatus.completed:
        return "\u{1F38A}";
      case LevelStatus.unlocked:
        return "\u{1F58D}";
      default:
        return "\u{1F512}";
    }
  };
  const onPlay = () => {
    const puzzleData = allTemplates[level];
    console.log(puzzleData);
    navigate("/puzzle", { state: { level, levelStatus, puzzleData } });
  };
  return (
    <button
      style={{ ...Styles.card, backgroundImage: getBgColor() }}
      disabled={levelStatus !== LevelStatus.unlocked}
      onClick={onPlay}
    >
      <div>
        <h1 style={Styles.text}>Level {level} </h1>
        <p style={Styles.icon}>{getIcon()}</p>
      </div>
    </button>
  );
};

const Styles: StylesObj = {
  card: {
    width: "200px",
    height: "170px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "1rem",
    borderRadius: "15px",
    boxShadow: "#666 1px 1px 5px 0px",
    outline: "unset",
    border: "1px solid #b5898970",
  },
  text: {
    fontSize: "2rem",
    color: "#FFF",
    fontWeight: "700",
    margin: "0px",
    fontFamily: "Spicy Rice, serif",
    textShadow:
      "rgb(0, 0, 0) -1px -1px 0px, rgb(0, 0, 0) 2px -1px 0px, rgb(0, 0, 0) -1px 2px 0px, rgb(0, 0, 0) 2px 2px 0px",
  },
  icon: {
    fontSize: "3rem",
    margin: "0px",
  },
};

export default LevelCard;
