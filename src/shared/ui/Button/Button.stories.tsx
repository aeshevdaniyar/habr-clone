import type {Meta, StoryObj} from "@storybook/react";
import Button, {ButtonTheme} from "shared/ui/Button/Button";

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
};

export default meta

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args:{
        children:'Button'
    }
}

export const Clear:Story = {
    args:{
        children:'Button',
        theme:ButtonTheme.CLEAR
    }
}

export const Outline:Story = {
    args:{
        children:'Button',
        theme:ButtonTheme.OUTLINE
    }
}