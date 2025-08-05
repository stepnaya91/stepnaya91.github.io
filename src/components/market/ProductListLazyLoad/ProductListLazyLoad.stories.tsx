import type { Meta } from '@storybook/react';
import { ProductListLazyLoad } from './ProductListLazyLoad';
import { Product } from "../../ProductType"
import { getRandomProductList } from '../../ProductCreator';


const meta: Meta<typeof ProductListLazyLoad> = {
    title: "market/ProductListLazyLoad",
    component: ProductListLazyLoad,
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