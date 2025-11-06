import React, { useState } from "react"
import { BasketButton } from "../BasketButton/BasketButton"
import { Product } from "../../ProductType"
import "./ProductPreview.css"
import { CroppedText } from "../CroppedText"
import { Link, useLocation } from "react-router-dom"

export const ProductPreview: React.FC<Product> = ({id,name, categoryName,price,description,image}) => {
    const location = useLocation();    
    
    return(
        <>
           <div className="preview-div">
                <Link to={"/EditProduct/"+id}  state={{ background: location }}><h2>{name}</h2></Link>
                <p>Цена: {price}</p>
                <p>Категория: {categoryName}</p>
                <p><CroppedText childrenText={description} opened={false} className="preview-description" /></p>
                <BasketButton id={id} name={name} categoryName={categoryName} price={price} description={description} image={image}/>
            </div>
        </>
    )
}