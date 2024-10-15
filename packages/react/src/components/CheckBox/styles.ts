import * as Checkbox from "@radix-ui/react-checkbox";
import { styled } from "../../styles";

export const CheckboxContainer = styled(Checkbox.Root, {
  all: "unset",
  width: "$floraSpace6",
  height: "$floraSpace6",
  background: "$floraColorsMediumLight1",
  borderRadius: "$floraRadiiMedium",
  lineHeight: 0,
  cursor: "pointer",
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "&[data-state='checked']": {
    backgroundColor: "$floraColors8",
  },

  "&:focus": {
    border: "2px solid $$floraColors6",
  },
});

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: "$floraColorsLightDark2",
  width: "$floraSpace4",
  height: "$floraSpace4",
});
