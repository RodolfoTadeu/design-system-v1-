import { StoryObj, Meta } from "@storybook/react";

import { Box, Text, TextArea, TextAreaProps } from "@repo/react";

export default {
  title: "Form/Text Area",
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <Text>Observations</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: "Add any observations",
  },
};
