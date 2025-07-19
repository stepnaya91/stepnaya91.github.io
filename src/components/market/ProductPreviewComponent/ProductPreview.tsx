import React from "react"
import { BasketButton } from "../BasketButtonComponent/BasketButton"
import { Product } from "../../ProductType"
import "./ProductPreview.scss"

export interface ProductPreviewProps extends Product{
    counter: number
}

export const ProductPreview: React.FC<ProductPreviewProps> = ({name, counter,price,description,image}) => {
    const descSmall = description.length>20?description.substring(0,20)+"...":description;
    return(
        <>
            <div className="preview-div">
                <h2>{name}</h2>
                <p>Price: {price}</p>
                <p>{image}</p>
                <p>{descSmall}</p>
                <BasketButton counter={counter}/>
            </div>
        </>
    )
}