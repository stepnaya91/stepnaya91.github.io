import React,{ FC } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from "src/components/common/Home/Home";
import { Layout } from "src/components/common/LayoutComponent/Layout";
import { ProfileForm } from "src/pages/ProfileForm/ProfileForm";
import { ProductListAddButton } from "src/pages/ProductListAddButton/ProductListAddButton";
import ProductListInBasket from "src/pages/ProductListInBasket/ProductListInBasket";
import { getRandomProductList } from "src/components/ProductCreator";

export type NavigationProps = {
  children: React.ReactNode;
}

export const Navigation: FC<NavigationProps> = ({ children }) => {
    return(
        <BrowserRouter>
            <Layout>
                {children}
                <Routes>
                    <Route index element={<Home/>}></Route>
                    <Route path="ProfileForm" element={<ProfileForm/>}></Route>
                    <Route path="ProductList" element={<ProductListAddButton products={ getRandomProductList()}/>}></Route>
                    <Route path="Basket" element={<ProductListInBasket products={ getRandomProductList()}/>}></Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
};