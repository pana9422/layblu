import { Button } from "./Button";

import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
	title: "Button",
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
	<Button {...args}>Default</Button>
);

export const Default = Template.bind({});
Default.args = { square: true };

export const Outline = Template.bind({});
Outline.args = { outline: true };

export const Text = Template.bind({});
Text.args = { flat: true };
