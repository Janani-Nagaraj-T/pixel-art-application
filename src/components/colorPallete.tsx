import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { crayonSlection } from "../features/selectedCrayon/selectedCrayonSlice.ts";
import { RootState } from "../app/store.ts";
import { StylesObj } from "../interfaces/Style.ts";

interface ColorPalleteProps {
  colorMap: Record<number, string>;
}
const ColorPallete = (props: ColorPalleteProps) => {
  const { colorMap } = props;
  const dispatch = useDispatch();
  const selectedCrayon = useSelector(
    (state: RootState) => state.selectedCrayon
  );

  const getCrayon = (colorKey: number, color: string, index: number) => {
    const onCrayonSelection = () => {
      dispatch(crayonSlection(colorKey));
    };
    return (
      <div
        style={{
          ...Styles.grid,
          marginTop: selectedCrayon === colorKey ? "10px" : 0,
          marginBottom: selectedCrayon === colorKey ? "10px" : 0,
        }}
      >
        <div
          key={`crayon-${index}`}
          style={{
            ...Styles.gridItem,
            marginLeft: selectedCrayon === colorKey ? "-1.2rem" : "0rem",
          }}
          onClick={onCrayonSelection}
        >
          <img
            src="crayon-img.png"
            style={{ ...Styles.crayon, backgroundColor: color }}
          />
        </div>
        <p style={Styles.label}>{colorKey}</p>
      </div>
    );
  };

  return (
    <div style={Styles.wrapper}>
      {Object.entries(colorMap).map(([colorKey, color], index) =>
        getCrayon(Number(colorKey), color, index)
      )}
    </div>
  );
};

const Styles: StylesObj = {
  wrapper: { display: "flex", flexDirection: "column", marginLeft: "4rem" },
  label: {
    fontSize: "0.8rem",
    backgroundColor: "#5e5f65",
    border: "1px solid #000",
    color: "#fff",
    borderRadius: "50%",
    gridRow: "1 / span 1",
    gridColumn: "1 / span 1",
    width: "1rem",
    height: "1rem",
    zIndex: 1,
  },
  crayon: {
    width: "100%",
    height: "100%",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr",
    alignItems: "center",
    justifyItems: "center",
    height: "1.8rem",
  },
  gridItem: {
    height: "1.8rem",
    aspectRatio: 10.1268656716,
    maskImage: "url(crayon-mask-img.png)",
    maskRepeat: "no-repeat",
    WebkitMaskImage: "url(crayon-mask-img.png)",
    maskSize: "100%",
    maskPosition: 0,
    gridRow: "1 / span 1",
    gridColumn: "1 / span 1",
  },
};

export default ColorPallete;
