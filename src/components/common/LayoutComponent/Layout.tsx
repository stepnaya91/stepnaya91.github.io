import React from "react"
import { Header } from "../HeaderComponent/Header"
import "./Layout.scss"
import { useTheme } from "../../ThemeProvider";
import { useLanguage } from "../../LanguageProvider";


export const Layout: React.FC = () => {
    const {theme} = useTheme();
    const {t} = useLanguage();
    const className="layout-div-"+theme;    
    return (
        <>
            <div className={className}>
                <Header/>
                <h2>{t('welcome')}</h2>
            </div>
        </>
    )
}