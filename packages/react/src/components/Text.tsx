import React, { ComponentProps } from "react";
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

export const Text = styled("p", {
  fontFamily: "$default",
  lineHeight: "$floraLineHeightsBase",
  margin: 0,
  color: "$floraColorsLightDark2",

  variants: {
    size: {
      floraSizes1: { fontSize: "0.25rem" },
      floraSizes2: { fontSize: "0.5rem" },
      floraSizes3: { fontSize: "0.75rem" },
      floraSizes4: { fontSize: "1rem" },
      floraSizes5: { fontSize: "1.25rem" },
      floraSizes6: { fontSize: "1.5rem" },
      floraSizes7: { fontSize: "1.75rem" },
      floraSizes8: { fontSize: "2rem" },
      floraSizes9: { fontSize: "2.25rem" },
      floraSizes10: { fontSize: "2.5rem" },
      floraSizes11: { fontSize: "2.75rem" },
      floraSizes12: { fontSize: "3rem" },
      floraSizes13: { fontSize: "3.25rem" },
      floraSizes14: { fontSize: "3.5rem" },
      floraSizes15: { fontSize: "3.75rem" },
      floraSizes16: { fontSize: "4rem" },
      floraSizes17: { fontSize: "4.25rem" },
      floraSizes18: { fontSize: "4.5rem" },
      floraSizes19: { fontSize: "4.75rem" },
      floraSizes20: { fontSize: "5rem" },
      floraSizes21: { fontSize: "5.25rem" },
      floraSizes22: { fontSize: "5.5rem" },
      floraSizes23: { fontSize: "5.75rem" },
    },
  },
  defaultVariants: { size: "floraSizes4" },
});

export interface TextProps extends ComponentProps<typeof Text> {
  children: React.ReactNode;
}
