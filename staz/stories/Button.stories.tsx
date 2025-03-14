import { Meta, StoryObj } from "@storybook/react";
import Button from "../app/components/ui/button/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "success", "warning", "danger", "inverse", "purple"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large", "extra-large"],
    },
    roundness: {
      control: "select",
      options: [
        "square",
        "small",
        "base",
        "medium",
        "large",
        "xl",
        "2xl",
        "circular",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "extra-large",
    roundness: "2xl",
    children: "Primary Button",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    size: "large",
    roundness: "large",
    children: "Success Button",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    size: "extra-large",
    roundness: "circular",
    children: "Warning Button",
  },
};
