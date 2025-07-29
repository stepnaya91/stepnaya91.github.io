import React from "react";
import {useTheme} from "../../ThemeProvider";
import "../../../app/App.scss";
import { useLanguage } from "../../LanguageProvider";

export const ToggleTheme: React.FC = () => {
    const {theme, toggleTheme}  = useTheme(); 
    const {t} = useLanguage();
    const className = "button-"+theme;
    return(
        <>
            <button className={className} onClick={toggleTheme}>{t('changeTheme')}</button>
        </>
    )
}