import React from "react"
import { ProductPreview } from "../ProductPreviewComponent/ProductPreview"
import { Product } from "../../ProductType"
import "./ProductBasket.scss"

export interface ProductBasketProps extends Product {
    counter: number
}

export const ProductBasket: React.FC<ProductBasketProps> = (props) => {
    return (
        <>
            <div className="productBasket-div">
                <ProductPreview 
                    name={props.name} 
                    categoryName={props.categoryName} 
                    price={props.price} 
                    description={props.description} 
                    image={props.image}
                    counter={props.counter}
                    />
                <div className="delete-button-div">
                    <button className="delete-button" type="button">Удалить</button>
                </div>
            </div>
        </>
    )
}