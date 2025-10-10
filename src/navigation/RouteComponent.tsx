import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "src/components/common/Home/Home";
import { ProductAdd } from "src/components/market/ProductAdd/ProductAdd";
import { getRandomProductList } from "src/components/ProductCreator";
import { Modal } from "src/pages/Modal/Modal";
import { ProductListAddButton } from "src/pages/ProductListAddButton/ProductListAddButton";
import ProductListInBasket from "src/pages/ProductListInBasket/ProductListInBasket";
import { ProfileForm } from "src/pages/ProfileForm/ProfileForm";

export function RouteComponent(){
    const location = useLocation();
    const background = location.state && location.state.background;
    return(
        <>
            <Routes location={background || location}>
                <Route index element={<Home/>}></Route>
                <Route path="/ProfileForm" element={<ProfileForm/>}></Route>
                <Route path="/ProductList" element={<ProductListAddButton products={ getRandomProductList()}/>}/>
                <Route path="/Basket" element={<ProductListInBasket products={ getRandomProductList()}/>}></Route>
                 <Route path="/EditProduct" element={<Modal><ProductAdd/></Modal>} />  
            </Routes>   
            {background && (
                <Routes>
                    <Route path="/EditProduct" element={<Modal><ProductAdd/></Modal>} /> 
                </Routes>
            )}        
        </>
    )
}