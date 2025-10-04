import React, { ReactNode } from "react"
import { Header } from "../HeaderComponent/Header"
import "./Layout.css"
import { useTheme } from "../../ThemeProvider";

interface LayoutProps {
    children: ReactNode
}

export const Layout: React.FC <LayoutProps> = ({children}) => {
    const {theme} = useTheme();
    const className="layout-div-"+theme;    
    return (
        <>
            <div className={className}>
                <Header/>
                {children}
            </div>
        </>
    )
}