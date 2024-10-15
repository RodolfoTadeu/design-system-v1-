import { styled } from "../styles";

export interface BoxProps {
  children: React.ReactNode;
}

export const Box = styled("div", {
  padding: "$floraSpace1",
  borderRadius: "$floraRadiiMedium",
  backgroundColor: "$floraColorsBrand1",
  border: "1px solid $floraColorsMediumLight2",
});

Box.displayName = "Box";
