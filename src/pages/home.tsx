import React from "react";
import LevelCard from "../components/levelCard.tsx";

const HomePage = () => {
  const levels = Array(10)
    .fill("")
    .map((_, index) => index + 1);
  return (
    <div style={Styles.page}>
      <h1 style={Styles.heading}>Let's Draw</h1>
      <div style={Styles.levelWrapper}>
        {levels.map((level) => (
          <LevelCard level={level} />
        ))}
      </div>
    </div>
  );
};

const Styles: Record<string, React.CSSProperties> = {
  page: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    backgroundImage: "linear-gradient(32deg, #ff9b00, #f7ff0d)",
  },
  heading: {
    fontSize: "3rem",
    backgroundImage: "linear-gradient(red, blue)",
    color: "transparent",
    backgroundClip: "text",
    fontFamily: "Slackey, serif",
    // marginBottom: "3rem",
  },
  levelWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
};

export default HomePage;
