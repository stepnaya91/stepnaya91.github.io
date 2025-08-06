import { v4 as uuidv4 } from 'uuid';

const categories : string[] = ["fruits", "vegetables", "clothes", "shoes"];
const CNT_CATEGORIES = 4;

export type Product = {
    id: string,
    name: string,
    price: number,
    categoryName: string,
    image?: string,
    description?: string,
}

const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
}


const getRandomCategory = (): string => {
    const i = getRandomInt(1,CNT_CATEGORIES); 
    return categories[i];
}

export const getRandomProduct = (): Product => {
    return {
        id: uuidv4(),
        name: `SomeProduct${getRandomInt(1,100)}`,
        description: "descr",
        price: getRandomInt(10,5000),
        categoryName: getRandomCategory()
    }
}

export const getRandomProductList = (): Product[] => {
    const products = [];
    for (let i=0;i<10;i++){
        products[i]=getRandomProduct();
    }
    return products;
}