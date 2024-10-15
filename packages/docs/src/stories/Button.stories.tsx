import { StoryObj, Meta } from "@storybook/react";

import { Button, StyledButtonVariants } from "@repo/react";
import { CaretRight } from "phosphor-react";

export default {
  title: "Form/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Finalizar compra",
  },
} as Meta<StyledButtonVariants>;

export const Primary: StoryObj<StyledButtonVariants> = {};

export const Secondary: StoryObj<StyledButtonVariants> = {
  args: {
    variant: "secondary",
    children: "Create new",
  },
};

export const Tertiary: StoryObj<StyledButtonVariants> = {
  args: {
    variant: "tertiary",
    children: "Cancel",
  },
};

export const Apply: StoryObj<StyledButtonVariants> = {
  args: {
    variant: "apply",
    children: "Aplicar",
    size: 35,
  },
};

export const Disabled: StoryObj<StyledButtonVariants> = {
  args: {
    Disabled: "disabled",
  },
};

export const WithIcon: StoryObj<StyledButtonVariants> = {
  args: {
    variant: "tertiary",
    children: (
      <>
        Continuar comprando
        <CaretRight />
      </>
    ),
  },
};

export const Small: StoryObj<StyledButtonVariants> = {
  args: {
    size: "sm",
  },
};
