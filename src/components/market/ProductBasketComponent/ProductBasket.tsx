import React from "react"
import { ProductPreview } from "../ProductPreviewComponent/ProductPreview"
import { Product } from "../../ProductType"
import "./ProductBasket.scss"
import { Button } from "../../common/Button/Button"

export interface ProductBasketProps extends Product {
    counter: number
}

export const ProductBasket: React.FC<ProductBasketProps> = ({name, categoryName,price, description, image, counter}) => {
    return (
        <>
            <div className="productBasket-div">
                <ProductPreview 
                    name={name} 
                    categoryName={categoryName}  
                    price={price} 
                    description={description} 
                    image={image}
                    counter={counter}
                    />
                <div className="delete-button-div">
                    <Button className="delete-button" label="Удалить"/>
                </div>
            </div>
        </>
    )
}