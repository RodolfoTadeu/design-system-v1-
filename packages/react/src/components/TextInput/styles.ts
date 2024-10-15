import { styled } from "../../styles";

export const TextInputContainer = styled("div", {
  backgroundColor: "$floraColorsLightDark2",
  padding: "floraSpace3 floraSpace4",
  borderRadius: "$floraRadiiSmall",
  boxSizing: "border-box",
  border: "1px solid $floraColorsLightDark1",
  display: "flex",
  alignItems: "baseline",

  "&:has(input:focus)": {
    border: "2px solid $floraColors6",
  },
});

export const Prefix = styled("span", {
  fontFamily: "$default",
  fontSize: "sm",
  color: "floraColorsLightDark2",
  fontWeight: "regular",
});

export const Input = styled("input", {
  fontFamily: "$default",
  fontSize: "sm",
  fontWeight: "regular",
  color: "$floraColorsMediumLight1",
  background: "transparent",
  border: 0,
  width: "100%",

  "&:focus": {
    outline: 0,
  },
});
