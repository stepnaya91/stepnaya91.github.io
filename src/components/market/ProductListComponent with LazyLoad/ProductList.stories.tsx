import type { Meta } from '@storybook/react';
import { ProductList } from './ProductList';
import { Product } from "../../ProductType"
import { getRandomProductList } from '../../ProductCreator';


const meta: Meta<typeof ProductList> = {
    title: "market/ProductListWithLazyLoad",
    component: ProductList,
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