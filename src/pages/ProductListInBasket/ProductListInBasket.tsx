import React, { memo, useMemo } from "react"
import { getRandomInt, Product } from "../../components/ProductCreator"
import "./ProductListInBasket.css"
import { ProductBasket } from "../../components/market/ProductBasketComponent/ProductBasket"

export interface ProductListProps {
    products: Product[]
}

export const ProductListInBasket: React.FC<ProductListProps>= ({products}) => {
    const productItems = useMemo(() => products.map((product)=>(
        <ProductBasket key={product.id}  counter={getRandomInt(1,100)} name={product.name} price={product.price} categoryName={product.categoryName} description={product.description}/>
    )),[products])
    return (
        <div>
            <h1>Список товаров</h1>
            <ul className="product-list-ul">
                {productItems}
            </ul>          
        </div>
    )
}

export default memo(ProductListInBasket)