import { colors } from "@repo/tokens";
import { getContrast } from "polished";

export const ColorGrid = () => {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: "2rem" }}>
        <p
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            color: `${getContrast(color, "#FFF") < 3.5 ? "#000" : "#FFF"}`,
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </p>
      </div>
    );
  });
};
