import React, { memo, useMemo } from "react"
import { ProductBasket } from "../ProductBasketComponent/ProductBasket"
import "./ProductList.css"
import { useSelector } from "react-redux"
import { basketSelectors } from "../../../../store/slices/basket"
import { Product } from "../../../../src/components/ProductType"

export interface ProductListProps {
    products: Product[]
}

export const ProductList: React.FC<ProductListProps>= ({products}) => {
    const productItems = useMemo(() => products.map((product)=>{
        return <ProductBasket key={product.id} name={product.name} price={product.price} categoryName={product.categoryName} description={product.description} id={product.id}/>
    }),[products])
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