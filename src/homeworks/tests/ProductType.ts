import { AccountTypeName } from "./AccountCreator";

export type Product = {
    id: string,
    name: string,
    price: number,
    category: ProductTypeName,
    image?: string,
    description?: string,
}

export type ProductTypeName = 'Car' | 'Toy' | 'Food'

export type ProductDiscount = {
    name: AccountTypeName,
    discount: number
}

export type ProductType = {
    typeName: ProductTypeName,
    concreteDiscount?: ProductDiscount[]
}

export const productTypeNames  : string[] = ['Car', 'Toy', 'Food'];
export const CNT_productTypeNames = 3;
