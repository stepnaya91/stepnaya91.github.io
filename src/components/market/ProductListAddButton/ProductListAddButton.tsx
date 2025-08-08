import React, { useState } from "react"
import { Product } from "../../ProductCreator"
import { getRandomProduct } from "../../ProductCreator"
import { ProductList } from "../ProductList/ProductList"
import { Button } from "../../common/Button/Button"
import "./ProductListAddButton.scss"
import { SliderRange } from "../SliderRange"

interface ProductProps{
    products: Product[]
}

function withAddButton (ProductListComponent: React.FC<ProductProps>) {
    return function AddButtonComponent({products}:ProductProps) {
        const [value, onChange] = useState<number>(5000);
        const [items, setItems] = useState<Product[]>(products);
    
        const handleValueChange = (value:number) => {
            onChange(value);
        };
        
        const [nextId, setNextId] = useState<number>(products.length);   
        const filteredItems=items.filter((product: Product) => {
                    return product.price <= value;
                });
        
        const addItem = ()=>{
            const newItem = getRandomProduct();
            setItems([...items,newItem]);
            setNextId(nextId+1);
            onChange(5000);
        }

        return(
            <>
                <div className="add-div">
                    <ProductListComponent products={filteredItems}/>
                    <div className="add-div-button">
                        <Button onClick={addItem} label="Показать еще"/>
                        <SliderRange className="range-slider" value={value} onChange={handleValueChange} min={10} max={5000} label="Цена меньше: "></SliderRange>
                    </div>                    
                </div>                
            </>
        )
    }
}

export const ProductListAddButton = withAddButton(ProductList)
