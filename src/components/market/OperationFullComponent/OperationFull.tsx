import React from "react"
import { BasketButton } from "../BasketButtonComponent/BasketButton"
import { Product } from "../../ProductType"
import "./OperationFull.scss"

export interface OperationFullProps extends Product{
    counter: number
};

export const OperationFull: React.FC<OperationFullProps> = (props) => {
    return(
        <>
            <div className="operation-div">
                <h2>{props.name}</h2>
                <p>Цена: {props.price}</p>
                <p>Категория: {props.categoryName}</p>
                <p>{props.image}</p>
                <p>{props.description}</p>
                <BasketButton counter={props.counter}/>
            </div>
        </>
    )
}