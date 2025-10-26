import React, { useState } from "react"
import { getRandomProduct } from "../../components/ProductCreator"
import { ProductList } from "../../components/market/ProductList/ProductList"
import { Button } from "../../components/common/Button/Button"
import "./ProductListAddButton.css"
import { SliderRange } from "../../components/market/SliderRange"
import { useTheme } from "src/components/ThemeProvider"
import { Link, Outlet, useLocation } from "react-router-dom"
import { Product } from "../../../src/components/ProductType"
import { useDispatch, useSelector } from "react-redux"
import { productsActions, productsSelectors } from "../../../store/slices/products"


interface ProductProps{
    products: Product[]
}

function withAddButton (ProductListComponent: React.FC<ProductProps>) {

    return function AddButtonComponent() {
        const {theme} = useTheme();
        const [value, onChange] = useState<number>(5000);
        const location = useLocation();

        const items = useSelector(productsSelectors.get)
        const dispatch = useDispatch();
        const addItem = () => dispatch(productsActions.add({product:getRandomProduct()}));    
        const handleValueChange = (value:number) => {
            onChange(value);
        };

        const filteredItems=items.filter((product: Product) => {
                    return product.price <= value;
                });

        return(
            <>                
                <div className="add-div">
                    <ProductListComponent products={filteredItems}/>

                    <div className="show-div-button">
                        <Link to="/EditProduct" state={{ background: location }}><Button className={"button-"+theme}  label="Добавить товар"/></Link>
                        <Button onClick={()=>{addItem(); onChange(5000);}} label="Показать еще"/>
                        <SliderRange className="range-slider" value={value} onChange={handleValueChange} min={10} max={5000} label="Цена меньше: "></SliderRange>
                        <Outlet />
                    </div>                    
                </div>                
            </>
        )
    }
}

export const ProductListAddButton = withAddButton(ProductList)
