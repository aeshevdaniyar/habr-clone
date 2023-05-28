import type {Meta, StoryObj} from "@storybook/react";
import {Sidebar} from "widgets/Sidebar";
import {ThemeDecorator} from "shared/config/storybook/StorybookDecorators/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";


const meta:Meta<typeof Sidebar> = {
    title:'widgets/Sidebar',
    component:Sidebar
}

type Story = StoryObj<typeof Sidebar>;

export const DefaultLight:Story = {
}

export const DefaultDark:Story = {
    decorators:[ThemeDecorator(Theme.DARK)]
}

export default meta