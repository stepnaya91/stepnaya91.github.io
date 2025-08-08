import React from "react"
import "./TransactionFull.scss"
import { Button } from "../../common/Button/Button"

export interface TransactionFullProps {
    title: string,
    date: string,
    amount: number,
    category: string,
    description: string
}

export const TransactionFull: React.FC<TransactionFullProps>=({amount,category,date,description,title})=>{
    return(
        <>
            <div className="full-div">
                <h2>{title}</h2>
                <p>Дата: {date}</p>
                <p>Сумма операции: {amount}</p>
                <p>Категория: {category}</p>
                <p>{description}</p>
                <div className="full-div-button">
                    <Button label="Редактировать"/>
                </div>
            </div>
        </>
    )
}