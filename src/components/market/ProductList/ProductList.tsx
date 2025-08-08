import React, { memo, useMemo } from "react"
import { Product } from "../../ProductCreator"
import { ProductBasket } from "../ProductBasketComponent/ProductBasket"
import "./ProductList.scss"

export interface ProductListProps {
    products: Product[]
}

export const ProductList: React.FC<ProductListProps>= ({products}) => {
    const productItems = useMemo(() => products.map((product)=>(
        <ProductBasket key={product.id}  counter={0} name={product.name} price={product.price} categoryName={product.categoryName} description={product.description}/>
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

export default memo(ProductList)