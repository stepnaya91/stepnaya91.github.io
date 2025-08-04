import React, { useEffect, useRef, useState } from "react"
import { Product } from "../../ProductCreator"
import { ProductBasket } from "../ProductBasketComponent/ProductBasket"
import { getRandomProduct } from "../../ProductCreator"
import { LazyLoad } from "../LazyLoad/LazyLoad"

export interface ProductListProps {
    products: Product[]
}

export const ProductList: React.FC<ProductListProps>= ({products}) => {
    const [items, setItems] = useState<Product[]>(products);
    const [nextId, setNextId] = useState<number>(products.length);

    const addItem = ()=>{
        const newItem = getRandomProduct();
        setItems([...items,newItem]);
        setNextId(nextId+1);
    }

    return (
        <>
            <h1>Список товаров</h1>
            <ul>
                {items.map((product)=>(
                    <li key={product.id}>
                        <ProductBasket counter={0} name={product.name} price={product.price} categoryName={product.categoryName} description={product.description}/>
                    </li>
                ))}
            </ul>   
            <LazyLoad changeObject={nextId} callback={addItem } >
            </LazyLoad>          
       
        </>
    )
}