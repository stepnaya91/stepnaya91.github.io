import React from "react"
import { BasketButton } from "../BasketButton/BasketButton"
import { Product } from "../../ProductType"
import "./OperationFull.scss"

export interface OperationFullProps extends Product{
    counter: number
};

export const OperationFull: React.FC<OperationFullProps> = ({name, price, categoryName, description}) => {
    return(
        <>
            <div className="operation-div">
                <h2>{name}</h2>
                <p>Цена: {price}</p>
                <p>Категория: {categoryName}</p>
                <p>{description}</p>
                <BasketButton id="" categoryName={categoryName} name={name} price={price}/>
            </div>
        </>
    )
}