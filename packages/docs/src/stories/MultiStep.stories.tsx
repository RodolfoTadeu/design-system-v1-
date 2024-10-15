import { StoryObj, Meta } from "@storybook/react";

import { Box, MultiStep, MultiStepProps } from "@repo/react";

export default {
  title: "Form/MultiStep",
  component: MultiStep,
  tags: ["autodocs"],
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<MultiStepProps>;

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
};

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
};
