import React, { useState } from "react"
import { Product } from "../../components/ProductCreator"
import { getRandomProduct } from "../../components/ProductCreator"
import { ProductList } from "../../components/market/ProductList/ProductList"
import { Button } from "../../components/common/Button/Button"
import "./ProductListAddButton.css"
import { SliderRange } from "../../components/market/SliderRange"
import { useTheme } from "src/components/ThemeProvider"
import { Link, Outlet, useLocation } from "react-router-dom"


interface ProductProps{
    products: Product[]
}

function withAddButton (ProductListComponent: React.FC<ProductProps>) {

    return function AddButtonComponent({products}:ProductProps) {
        const {theme} = useTheme();
        const [value, onChange] = useState<number>(5000);
        const [items, setItems] = useState<Product[]>(products);
        const location = useLocation();
    
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

                    <div className="show-div-button">
                        <Link to="/EditProduct" state={{ background: location }}><Button className={"button-"+theme}  label="Добавить товар"/></Link>
                        <Button onClick={addItem} label="Показать еще"/>
                        <SliderRange className="range-slider" value={value} onChange={handleValueChange} min={10} max={5000} label="Цена меньше: "></SliderRange>
                        <Outlet />
                    </div>                    
                </div>                
            </>
        )
    }
}

export const ProductListAddButton = withAddButton(ProductList)
