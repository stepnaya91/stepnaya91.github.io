import "./BasketButon.css"
import "../../../app/App.css"
import React, { memo } from "react"
import { Button } from "../../common/Button/Button"
import { useLanguage } from "src/components/LanguageProvider"
import { useTheme } from "src/components/ThemeProvider"
import { useDispatch, useSelector } from "react-redux"
import { basketActions, basketSelectors } from "../../../../store/slices/basket"
import { Product } from "../../ProductType"


export const BasketButton: React.FC<Product> = ({id,name, categoryName,price,description,image}:Product) => {
    const {t} = useLanguage();
    const {theme} = useTheme();

    const dispatch = useDispatch();
    const pushToBasket = () => dispatch(basketActions.addItem({product:{id:id,categoryName:categoryName,name:name, price:price, description:description, image: image}}))
    const count = useSelector(basketSelectors.getCountById(id));
    const increase = () => dispatch(basketActions.increaseProductCount({id}));
    const decrease = () => dispatch(basketActions.decreaseProductCount({id}));
    
    if (count===0) {
        return (
            <div className="basket-add-button-div">
                <Button label={t('basketButtonName')} onClick={pushToBasket}/>
            </div>
        )

    }
    return (
        <div className="basket-buttons">
            <Button className={"basket-button-left button-"+theme} label="-" onClick={decrease}/>
            <input className={"basket-input-"+theme} value={count}></input>
            <Button className={"basket-button-right button-"+theme} label="+" onClick={increase}/>
        </div>
    )
}

export default memo(BasketButton);