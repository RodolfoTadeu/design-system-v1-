import React, { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

// export interface FontSizeProps {
//   size:
//     | "floraSizes1"
//     | "floraSizes2"
//     | "floraSizes3"
//     | "floraSizes4"
//     | "floraSizes5"
//     | "floraSizes6"
//     | "floraSizes7"
//     | "floraSizes8"
//     | "floraSizes9"
//     | "floraSizes10"
//     | "floraSizes11"
//     | "floraSizes12"
//     | "floraSizes13"
//     | "floraSizes14"
//     | "floraSizes15"
//     | "floraSizes16"
//     | "floraSizes17"
//     | "floraSizes18"
//     | "floraSizes19"
//     | "floraSizes20"
//     | "floraSizes21"
//     | "floraSizes22"
//     | "floraSizes23";
//   children: React.ReactNode;
// }

// export interface TextProps {
//   size: FontSizeProps;
// }

export const Heading = styled("h2", {
  fontFamily: "$default",
  lineHeight: "$floraLineHeightsBase",
  margin: 0,
  color: "$floraColorsLightDark2",

  variants: {
    size: {
      floraSizes5: { fontSize: "1.25rem" },
      floraSizes6: { fontSize: "1.5rem" },
      floraSizes7: { fontSize: "1.75rem" },
      floraSizes8: { fontSize: "2rem" },
      floraSizes9: { fontSize: "2.25rem" },
      floraSizes10: { fontSize: "2.5rem" },
      floraSizes11: { fontSize: "2.75rem" },
      floraSizes12: { fontSize: "3rem" },
    },
  },
  defaultVariants: { size: "floraSizes4" },
});

export interface HeadingProps extends ComponentProps<typeof Heading> {
  children: React.ReactNode;
  as?: ElementType;
}
