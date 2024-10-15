import { StoryObj, Meta } from "@storybook/react";

import { TextInput, TextInputProps } from "@repo/react";

export default {
  title: "Form/Text Input",
  component: TextInput,
  args: {},
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: "cal.com/",
  },
};
