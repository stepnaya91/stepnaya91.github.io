import React from "react"
import { Logo } from "../Logo"
import { ToggleTheme } from "../ToggleTheme/ToggleTheme";
import { useTheme } from "../../ThemeProvider";
import { ChangeLanguage } from "../ChangeLanguageComponent/ChangeLanguage";
import "./Header.css"
import { NavLink } from "react-router-dom";
import { useLanguage } from "src/components/LanguageProvider";

export const Header: React.FC = () => {
    const {theme} = useTheme();
    const {t} = useLanguage();
    const className="header-div-"+theme;
    return(        
        <div className={className}>
            <div className="header-div-logo">
                <Logo/>
            </div>
            <div className="menu-div">
                <NavLink className={"link link-"+theme} to="/">
                    {t('home')}
                </NavLink>
                <NavLink className={"link link-"+theme} to="/ProfileForm">
                    {t('profile')}
                </NavLink>
                <NavLink className={"link link-"+theme} to="/ProductList">
                    {t('catalog')}
                </NavLink>
                <NavLink className={"link link-"+theme} to="/Basket">
                    {t('addToCart')}
                </NavLink>
            </div>
            <div className="header-div-right">
                <div>
                    <ToggleTheme/>
                </div>
                <div>
                    <ChangeLanguage/>
                </div>
            </div>
        </div>
    )
}