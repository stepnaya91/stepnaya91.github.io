import type { Meta } from '@storybook/react';
import { ProductPreview } from './ProductPreview';

const meta: Meta<typeof ProductPreview> = {
    title: "market/ProductPreview",
    component: ProductPreview,
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