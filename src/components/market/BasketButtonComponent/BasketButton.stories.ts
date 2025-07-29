import type { Meta } from '@storybook/react';
import { BasketButton } from './BasketButton';

const meta: Meta<typeof BasketButton> = {
    title: "market/BasketButton",
    component: BasketButton,
    args: {
        counter: 0
    }
}

export default meta;

export const Primary = {
    args:{
        counter: 0
    } 
}

export const WithCounter = {
    args:{
        counter: 5
    }
}
