import React, { useState } from "react"
import { BasketButton } from "../BasketButton/BasketButton"
import { Product } from "../../ProductType"
import "./ProductPreview.css"
import { CroppedText } from "../CroppedText"
import { Modal } from "src/components/common/Modal/Modal"
import { ProductAdd } from "../ProductAdd/ProductAdd"

export interface ProductPreviewProps extends Product{
    counter: number
}

export const ProductPreview: React.FC<ProductPreviewProps> = ({name, categoryName,counter,price,description,image}) => {
    const [visible,setVisible]=useState<boolean>(false);

    const handleNameClick = (value:boolean) => {
        setVisible(value);
    }
    return(
        <>
            <Modal visible={visible} onUpdateVisible={handleNameClick}><ProductAdd name={name} categoryName={categoryName} price={price} description={description} image={image}/></Modal>
            <div className="preview-div">
                <h2 onClick={()=>setVisible(true)}>{name}</h2>
                <p>Цена: {price}</p>
                <p>Категория: {categoryName}</p>
                <p>{image}</p>
                <p><CroppedText childrenText={description} opened={false} className="preview-description" /></p>
                <BasketButton counter={counter}/>
            </div>
        </>
    )
}