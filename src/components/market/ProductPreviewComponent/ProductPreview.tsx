import React from "react"
import { BasketButton } from "../BasketButtonComponent/BasketButton"
import { Product } from "../../ProductType"
import "./ProductPreview.scss"

export interface ProductPreviewProps extends Product{
    counter: number
}

export const ProductPreview: React.FC<ProductPreviewProps> = (props) => {
    return(
        <>
            <div className="preview-div">
                <h2>{props.name}</h2>
                <p>Price: {props.price}</p>
                <p>{props.image}</p>
                <p>{props.description}</p>
                <BasketButton counter={props.counter}/>
            </div>
        </>
    )
}