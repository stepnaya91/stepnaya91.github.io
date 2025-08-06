import "./BasketButon.scss"
import "../../../app/App.scss"
import React, { memo } from "react"
import { Button } from "../../common/Button/Button"

export interface BasketButtonProps {
    counter: number
}

export const BasketButton: React.FC<BasketButtonProps> = memo(({counter}) => {
    if (counter===0) {
        return (
            <div className="basket-add-button-div">
                <Button label="В корзину"/>
            </div>
        )
    }
    return (
        <div className="basket-buttons">
            <Button className="basket-button" label="-"/>
            <input className="basket-input" value={counter}></input>
            <Button className="basket-button" label="+"/>
        </div>
    )
})