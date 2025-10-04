import React from "react"
import { ProductPreview } from "../ProductPreview/ProductPreview"
import { Product } from "../../ProductType"
import "./ProductBasket.css"
import { Button } from "../../common/Button/Button"
import { useTheme } from "src/components/ThemeProvider"
import { useLanguage } from "src/components/LanguageProvider"

export interface ProductBasketProps extends Product {
    counter: number
}

export const ProductBasket: React.FC<ProductBasketProps> = ({name, categoryName,price, description, image, counter}) => {
    const {theme} = useTheme();
    const {t} = useLanguage();
    const className="productBasket-div-"+theme;
    const buttonClassName = "delete-button-"+theme;
    return (
        <>
            <div className={className}>
                <ProductPreview 
                    name={name} 
                    categoryName={categoryName}  
                    price={price} 
                    description={description} 
                    image={image}
                    counter={counter}
                    />
                <div className="delete-button-div">
                    <Button className={buttonClassName} label={t('deleteButtonName')}/>
                </div>
            </div>
        </>
    )
}