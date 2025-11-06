import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "src/components/common/Home/Home";
import { ProductAdd } from "src/components/market/ProductAdd/ProductAdd";
import { Modal } from "src/pages/Modal/Modal";
import { ProductListAddButton } from "src/pages/ProductListAddButton/ProductListAddButton";
import ProductListInBasket from "src/pages/ProductListInBasket/ProductListInBasket";
import { ProfileForm } from "src/pages/ProfileForm/ProfileForm";
import { ProtectedRoute } from "./ProtectedRoute";
import { AdminRoute } from "./AdminRoute";

export function RouteComponent(){
    const location = useLocation();
    const background = location.state && location.state.background;
    return(
        <ProtectedRoute>        
                <Routes location={background || location}>
                    <Route index element={<Home/>}></Route>
                    <Route path="/ProfileForm" element={<ProfileForm/>}></Route>
                    <Route path="/ProductList" element={<ProductListAddButton/>}/>
                    <Route path="/Basket" element={<ProductListInBasket/>}></Route>
                    <Route path="/EditProduct" element={<AdminRoute><Modal><ProductAdd/></Modal></AdminRoute> } />  
                    <Route path="/EditProduct/:productId" element={<AdminRoute><Modal><ProductAdd/></Modal></AdminRoute> } /> 
                    <Route path="/AdminOnly" element={<Modal>Эта функция только для администратора</Modal>}/>
                </Routes>   
                {background && (
                    <Routes>
                            <Route path="/EditProduct" element={<AdminRoute><Modal><ProductAdd/></Modal></AdminRoute>} /> 
                            <Route path="/EditProduct/:productId" element={<AdminRoute><Modal><ProductAdd/></Modal></AdminRoute>} /> 
                            <Route path="/AdminOnly" element={<Modal>Эта функция только для администратора</Modal>}/>
                    </Routes>
                )}  
        </ProtectedRoute>      
    )
}
