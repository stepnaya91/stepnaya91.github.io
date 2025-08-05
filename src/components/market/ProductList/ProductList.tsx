import React from "react"
import { Product } from "../../ProductCreator"
import { ProductBasket } from "../ProductBasketComponent/ProductBasket"
import "./ProductList.scss"

export interface ProductListProps {
    products: Product[]
}

export const ProductList: React.FC<ProductListProps>= ({products}) => {
    return (
        <>
            <h1>Список товаров</h1>
            <ul className="product-list-ul">
                {products.map((product)=>(
                    <ProductBasket key={product.id}  counter={0} name={product.name} price={product.price} categoryName={product.categoryName} description={product.description}/>
                ))}
            </ul>          
        </>
    )
}      