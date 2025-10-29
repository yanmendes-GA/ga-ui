import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
    },
    icon: {
      control: "text",
    },
    iconSide: {
      control: { type: "radio" },
      options: ["left", "right"],
    },
    variant: {
      control: { type: "select" },
      options: ["default", "outline", "ghost"],
    },
    iconOnly: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Button",
    variant: "default",
    disabled: false,
    icon: "filters",
    iconSide: "left",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
    disabled: false,
    icon: "filters",
    iconSide: "left",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost Button",
    variant: "ghost",
    disabled: false,
    icon: "filters",
    iconSide: "left",
  },
};

export const IconRight: Story = {
  args: {
    children: "Icon Right",
    variant: "default",
    disabled: false,
    icon: "arrow_forward",
    iconSide: "right",
  },
};

export const IconOnly: Story = {
  args: {
    variant: "default",
    iconOnly: true,
    disabled: false,
    icon: "filters",
  },
};

export const IconOnlyOutline: Story = {
  args: {
    variant: "outline",
    iconOnly: true,
    disabled: false,
    icon: "filters",
  },
};

export const IconOnlyGhost: Story = {
  args: {
    variant: "ghost",
    iconOnly: true,
    disabled: false,
    icon: "filters",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    variant: "default",
    disabled: true,
    icon: "filters",
  },
};

export const DisabledOutline: Story = {
  args: {
    children: "Disabled Outline",
    variant: "outline",
    disabled: true,
    icon: "filters",
  },
};

export const DisabledGhost: Story = {
  args: {
    children: "Disabled Ghost",
    variant: "ghost",
    disabled: true,
    icon: "filters",
  },
};