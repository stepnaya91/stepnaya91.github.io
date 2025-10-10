import React,{ FC } from "react";
import { BrowserRouter} from 'react-router-dom';
import { Layout } from "src/components/common/LayoutComponent/Layout";
import { RouteComponent } from "./RouteComponent";
export type NavigationProps = {
  children: React.ReactNode;
}

export const Navigation: FC<NavigationProps> = ({ children }) => {
 
    return(
        <BrowserRouter>
            <Layout>
                {children}
                <RouteComponent/>
            </Layout>
        </BrowserRouter>
    )
};