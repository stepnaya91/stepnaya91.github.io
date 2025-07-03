import type { Meta } from '@storybook/react';
import { OperationFull } from './OperationFull';

const meta: Meta<typeof OperationFull> = {
    title: "market/OperationFull",
    component: OperationFull,
}

export default meta;

export const NoCounter = {
    args: {
        name:"Мороженое",
        categoryName:"Еда",
        description:"Краткое описание",
        image:"",
        price:200,
        counter:0
    }
}
export const WithCounter = {
    args: {
        name:"Мороженое",
        categoryName:"Еда",
        description:"Краткое описание",
        image:"",
        price:200,
        counter:10
    }
}
