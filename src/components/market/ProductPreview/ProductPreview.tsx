import React from "react"
import { BasketButton } from "../BasketButton/BasketButton"
import { Product } from "../../ProductType"
import "./ProductPreview.scss"
import { CroppedText } from "../CroppedText"

export interface ProductPreviewProps extends Product{
    counter: number
}

export const ProductPreview: React.FC<ProductPreviewProps> = ({name, counter,price,description,image}) => {
    return(
        <>
            <div className="preview-div">
                <h2>{name}</h2>
                <p>Price: {price}</p>
                <p>{image}</p>
                <p><CroppedText children={description} opened={false} className="preview-description" /></p>
                <BasketButton counter={counter}/>
            </div>
        </>
    )
}