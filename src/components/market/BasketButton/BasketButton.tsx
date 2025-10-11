import "./BasketButon.css"
import "../../../app/App.css"
import React, { memo } from "react"
import { Button } from "../../common/Button/Button"
import { useLanguage } from "src/components/LanguageProvider"
import { useTheme } from "src/components/ThemeProvider"

export interface BasketButtonProps {
    counter: number
}

export const BasketButton: React.FC<BasketButtonProps> = ({counter}) => {
    const {t} = useLanguage();
    const {theme} = useTheme();

    if (counter===0) {
        return (
            <div className="basket-add-button-div">
                <Button label={t('basketButtonName')}/>
            </div>
        )

    }
    return (
        <div className="basket-buttons">
            <Button className={"basket-button-left button-"+theme} label="-"/>
            <input className={"basket-input-"+theme} value={counter}></input>
            <Button className={"basket-button-right button-"+theme} label="+"/>
        </div>
    )
}

export default memo(BasketButton);