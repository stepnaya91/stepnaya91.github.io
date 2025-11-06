import React,{ FC } from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Layout } from "src/components/common/LayoutComponent/Layout";
import { RouteComponent } from "./RouteComponent";
import Auth from "src/pages/Auth/Auth";
import AuthComponent from "src/pages/AuthComponent/Auth";
export type NavigationProps = {
  children: React.ReactNode;
}

export const Navigation: FC<NavigationProps> = ({ children }) => {
 
    return(
        <BrowserRouter>
            <Layout>
                {children}
                <Routes>
                    <Route path="/Auth" element={<Auth/>}></Route>
                    <Route path="/AuthComponent" element={<AuthComponent/>}></Route>
                    <Route path="*" element = {<RouteComponent/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
};