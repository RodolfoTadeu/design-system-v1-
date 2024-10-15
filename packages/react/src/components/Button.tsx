import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";
import type * as Stitches from "@stitches/react";

export const Button = styled("button", {
  all: "unset",
  borderRadius: "$floraRadiiMedium",
  fontSize: "$floraSizes4",
  fontWeight: "$floraFontWeightsMedium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",
  padding: "0 $fontSpace4",
  paddingLeft: " $floraSpace5",
  paddingRight: "$floraSpace5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$floraSpace2",
  cursor: "pointer",

  "&:disabled": {
    cursor: "not-allowed",
  },

  svg: {
    width: "$fontSpace4",
    height: "$fontSpace4",
  },

  variants: {
    variant: {
      primary: {
        color: "$floraColorsLightDark2",
        background: "$floraColors6",
        paddingBottom: "2px",
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0px 2px 2px 0px, rgba(0, 0, 0, 0.2) 0px -2px 0px 0px inset",

        "&:active": {
          paddingBottom: "0px",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px -2px 4px 0px inset, rgba(0, 0, 0, 0.25) 0px 3px 0px inset",
        },

        "&:not(:disabled):hover": {
          background: "$floraColors7",
        },

        "&:disabled": {
          background: "$floraColorsMediuMmedium",
        },
      },

      secondary: {
        color: "$floraColors7",
        border: "2px solid $floraColors7",
      },

      tertiary: {
        color: "$floraColorsLightDark2",
      },

      apply: {
        background: "$floraColorsLightDark2",
        borderRadius: "$floraRadiiSmall",
        border: "2px solid $floraColors8",
        paddingBottom: "2px",
        color: "$floraColors8",
        fontWeight: 600,
        height: 35,

        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 2px 4px 0px, rgb(0, 119, 104) 0px -1px 0px 0px inset",

        "&:active": {
          paddingBottom: 0,
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export type StyledButtonVariants = Stitches.VariantProps<typeof Button>;
