import "./BasketButon.scss"
import "../../../app/App.scss"

import React from "react"

export interface BasketButtonProps {
    counter: number
}

export const BasketButton: React.FC<BasketButtonProps> = ({counter}) => {
    if(counter===0){
        return(
            <div className="basket-add-button-div">
                <button  type="button">В корзину</button>
            </div>
        )
    }
    else
        return(
            <>
                <div className="basket-buttons">
                    <button  type="button" className="basket-button">-</button>
                    <input className="basket-input" value={counter}></input>
                    <button  type="button" className="basket-button">+</button>
                </div>
                
            </>
        )
}