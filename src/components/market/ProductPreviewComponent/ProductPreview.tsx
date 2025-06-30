import React from "react"
import { BasketButton } from "../BasketButtonComponent/BasketButton"
import { Product } from "../../ProductType"
import "./ProductPreview.scss"

export interface ProductPreviewProps extends Product{
    counter: number
}

export const ProductPreview: React.FC<ProductPreviewProps> = (props) => {
    const description = props.description;
    const descSmall = description.length>20?description.substring(0,20)+"...":description;
    return(
        <>
            <div className="preview-div">
                <h2>{props.name}</h2>
                <p>Price: {props.price}</p>
                <p>{props.image}</p>
                <p>{descSmall}</p>
                <BasketButton counter={props.counter}/>
            </div>
        </>
    )
}