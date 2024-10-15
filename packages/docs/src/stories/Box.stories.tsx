import { StoryObj, Meta } from "@storybook/react";

import { Box, BoxProps, Text } from "@repo/react";

export default {
  title: "Surface/Box",
  component: Box,
  tags: ["autodocs"],
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {
  args: {
    children: (
      <>
        <Text>O Boticário</Text>
      </>
    ),
  },
};

// export const Big: StoryObj<BoxProps> = {
//   args: { size: "big", children: "Enviar" },
// };
