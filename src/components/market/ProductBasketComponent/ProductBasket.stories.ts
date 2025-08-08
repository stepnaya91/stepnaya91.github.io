import type { Meta } from '@storybook/react';
import { ProductBasket } from './ProductBasket';

const meta: Meta<typeof ProductBasket> = {
    title: "market/ProductBasket",
    component: ProductBasket,
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