import { styled } from "../../styles";
import { Text } from "../Text";

export const MultiStepContainer = styled("div", {});

export const Label = styled(Text, {
  color: "$floraColorsLightDark2",

  defaultVariants: {
    size: "xs",
  },
});

export const Steps = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(var(--steps-size), 1fr)",
  gap: "2px",
  marginTop: "1px",
});

export const Step = styled("div", {
  height: "2px",
  borderRadius: "$floraColorsMediumLight2",
  backgroundColor: "$floraColorsMediumLight2",

  variants: {
    active: {
      true: {
        backgroundColor: "$floraColorsMediumLight1",
      },
    },
  },
});
