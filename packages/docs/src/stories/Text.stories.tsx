import { StoryObj, Meta } from "@storybook/react";

import { Text, TextProps } from "@repo/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children: "TEXT",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};
