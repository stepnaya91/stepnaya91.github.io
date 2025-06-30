import React from "react"
import "./TransactionPreview.scss"

export interface TransactionPreviewProps {
    title: string,
    date: string,
    amount: number,
    category: string,
    description: string
}


export const TransactionPreview: React.FC<TransactionPreviewProps> = (props) => {
    const description = props.description;
    const descSmall = description.length>20?description.substring(0,20)+"...":description;
    return(
        <div className="transaction-preview-div">
            <h2>{props.title}</h2>
            <p>Сумма операции: {props.amount}</p>
            <p>Категория: {props.category}</p>
            <p>{descSmall}</p>
        </div>
    )
}