import { ComponentProps } from "@stitches/react";
import { styled } from "../styles";

export const TextArea = styled("textarea", {
  backgroundColor: "$floraColorsLightDark2",
  padding: "floraSpace3 floraSpace4",
  borderRadius: "$floraRadiiSmall",
  boxSizing: "border-box",
  border: "1px solid $floraColors6",

  fontFamily: "$default",
  fontSize: "$floraSizes4",
  color: "$floraColorsMediuMmedium",
  resize: "vertical",
  minHeight: 80,

  "&:has(input:focus)": {
    border: "2px solid $floraColors6",
    outline: 0,
  },

  "&:placeholder": {
    color: "$$floraColorsMediuMmedium",
  },
});

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}
