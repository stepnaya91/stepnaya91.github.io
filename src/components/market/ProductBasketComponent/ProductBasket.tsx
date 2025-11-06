import React from "react"
import { ProductPreview } from "../ProductPreview/ProductPreview"
import { Product } from "../../ProductType"
import "./ProductBasket.css"
import { Button } from "../../common/Button/Button"
import { useTheme } from "src/components/ThemeProvider"
import { useLanguage } from "src/components/LanguageProvider"
import { useDispatch } from "react-redux"
import { basketActions } from "../../../../store/slices/basket"


export const ProductBasket: React.FC<Product> = ({id,name, categoryName,price, description, image}) => {
    const {theme} = useTheme();
    const {t} = useLanguage();
    const className="productBasket-div-"+theme;
    const buttonClassName = "delete-button-"+theme; 
    const dispatch = useDispatch();

    const deleteItem = () => dispatch(basketActions.removeItem({id}))

    
    return (
        <>
            <div className={className}>
                <ProductPreview 
                    id={id} 
                    name={name} 
                    categoryName={categoryName}  
                    price={price} 
                    description={description} 
                    image={image}
                    />
                <div className="delete-button-div">
                    <Button className={buttonClassName} label={t('deleteButtonName')} onClick={deleteItem}/>
                </div>
            </div>
        </>
    )
}

