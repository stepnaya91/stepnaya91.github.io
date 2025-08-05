import "./BasketButon.scss"
import "../../../app/App.scss"
import React from "react"
import { Button } from "../../common/Button/Button"

export interface BasketButtonProps {
    counter: number
}

export const BasketButton: React.FC<BasketButtonProps> = ({counter}) => {
    return (
        counter===0?<div className="basket-add-button-div">
                        <Button label="В корзину"/>
                    </div>
                   :<div className="basket-buttons">
                        <Button className="basket-button" label="-"/>
                        <input className="basket-input" value={counter}></input>
                        <Button className="basket-button" label="+"/>
                    </div>
    )
}