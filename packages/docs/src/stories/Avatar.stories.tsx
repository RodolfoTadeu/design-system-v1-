import { StoryObj, Meta } from "@storybook/react";

import { Avatar, AvatarProps } from "@repo/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    src: "https://github.com/RodolfoTadeu.png",
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
