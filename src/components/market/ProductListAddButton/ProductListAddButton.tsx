import React, { useState } from "react"
import { Product } from "../../ProductCreator"
import { getRandomProduct } from "../../ProductCreator"
import { ProductList } from "../ProductList/ProductList"
import { Button } from "../../common/Button/Button"

interface ProductProps{
    products: Product[]
}

const withAddButton = (ProductListComponent: React.FC<ProductProps>) => ({products}:ProductProps) =>  {
    const [items, setItems] = useState<Product[]>(products);
    const [nextId, setNextId] = useState<number>(products.length);    

    const addItem = ()=>{
        const newItem = getRandomProduct();
        setItems([...items,newItem]);
        setNextId(nextId+1);
    }

    return(
        <>
            <ProductListComponent products={items}/>
            <Button onClick={addItem} label="Показать еще"/> 
        </>
    )
}

export const ProductListAddButton = withAddButton(ProductList)
