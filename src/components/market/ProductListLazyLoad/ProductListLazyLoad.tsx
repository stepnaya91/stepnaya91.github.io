import React, { useCallback, useState } from "react"
import { Product } from "../../ProductCreator"
import { getRandomProduct } from "../../ProductCreator"
import { LazyLoad } from "../LazyLoad/LazyLoad"
import { ProductList } from "../ProductList/ProductList"

interface ProductProps{
    products: Product[]
}

function withLazyLoad(ProductListComponent: React.FC<ProductProps>){
        return function LazyLoadComponent({products}:ProductProps) {
        const [items, setItems] = useState<Product[]>(products);
        const [nextId, setNextId] = useState<number>(products.length);    

        const addItem = useCallback(()=>{
            const newItem = getRandomProduct();
            setItems([...items,newItem]);
            setNextId(nextId+1);
        },[items, nextId])

        return(
            <>
                <ProductListComponent products={items}/>
                <LazyLoad changeObject={nextId} callback={addItem}/>
            </>
        )
    }
}

export const ProductListLazyLoad = withLazyLoad(ProductList)
