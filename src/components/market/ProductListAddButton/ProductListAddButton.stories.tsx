import type { Meta } from '@storybook/react';
import { ProductListAddButton } from './ProductListAddButton';
import { Product } from "../../ProductType"
import { getRandomProductList } from '../../ProductCreator';

const meta: Meta<typeof ProductListAddButton> = {
    title: "market/ProductListAddButton",
    component: ProductListAddButton,
    argTypes:{
        products:{control: 'object'}
    }
}

export default meta;

export const EmptyList = {
    args: {
        products : [] as Product[]
    }
}

export const WithList = {
    args: {
        products : getRandomProductList()
    }
}
