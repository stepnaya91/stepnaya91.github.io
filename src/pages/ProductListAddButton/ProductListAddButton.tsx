import React, { useState } from "react"
import { Product } from "../../components/ProductCreator"
import { getRandomProduct } from "../../components/ProductCreator"
import { ProductList } from "../../components/market/ProductList/ProductList"
import { Button } from "../../components/common/Button/Button"
import "./ProductListAddButton.css"
import { SliderRange } from "../../components/market/SliderRange"
import { Modal } from "src/components/common/Modal/Modal"
import { ProductAdd } from "src/components/market/ProductAdd/ProductAdd"
import { useTheme } from "src/components/ThemeProvider"

interface ProductProps{
    products: Product[]
}

function withAddButton (ProductListComponent: React.FC<ProductProps>) {

    return function AddButtonComponent({products}:ProductProps) {
        const {theme} = useTheme();
        const [value, onChange] = useState<number>(5000);
        const [items, setItems] = useState<Product[]>(products);
        const [visible,setVisible]=useState<boolean>(false);
    
        const handleValueChange = (value:number) => {
            onChange(value);
        };

        const handleButtonClick = (value:boolean) => {
            setVisible(value);
        }
        
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
                <Modal visible={visible} onUpdateVisible={handleButtonClick}><ProductAdd/></Modal>
                <div className="add-div">
                    <ProductListComponent products={filteredItems}/>

                    <div className="show-div-button">
                        <Button className={"button-"+theme} onClick={()=>setVisible(true)} label="Добавить товар"/>
                        <Button onClick={addItem} label="Показать еще"/>
                        <SliderRange className="range-slider" value={value} onChange={handleValueChange} min={10} max={5000} label="Цена меньше: "></SliderRange>
                    </div>                    
                </div>                
            </>
        )
    }
}

export const ProductListAddButton = withAddButton(ProductList)
