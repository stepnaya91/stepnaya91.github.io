import React from "react"
import "./TransactionFull.scss"

export interface TransactionFullProps {
    title: string,
    date: string,
    amount: number,
    category: string,
    description: string
}

export const TransactionFull: React.FC<TransactionFullProps>=(props)=>{
    return(
        <>
            <div className="full-div">
                <h2>{props.title}</h2>
                <p>Дата: {props.date}</p>
                <p>Сумма операции: {props.amount}</p>
                <p>Категория: {props.category}</p>
                <p>{props.description}</p>
                <div className="full-div-button">
                    <button type="button">Редактировать</button>
                </div>
            </div>
        </>
    )
}