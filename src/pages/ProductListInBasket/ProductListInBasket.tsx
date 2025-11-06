import React, { memo, useMemo } from "react"
import "./ProductListInBasket.css"
import { ProductBasket } from "../../components/market/ProductBasketComponent/ProductBasket"
import { useSelector } from "react-redux"
import { basketSelectors } from "../../../store/slices/basket"

export const ProductListInBasket: React.FC = () => {
    const items = useSelector(basketSelectors.get);
    const productItems = useMemo(() => items.map((product)=>(
        <ProductBasket key={product.id}  name={product.name} price={product.price} categoryName={product.categoryName} description={product.description} id={product.id}/>
    )),[items])
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