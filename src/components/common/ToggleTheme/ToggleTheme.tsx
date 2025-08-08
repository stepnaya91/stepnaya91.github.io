import React from "react";
import {useTheme} from "../../ThemeProvider";
import "../../../app/App.scss";
import { useLanguage } from "../../LanguageProvider";
import { Button } from "../Button/Button";

export const ToggleTheme: React.FC = () => {
    const {theme, toggleTheme}  = useTheme(); 
    const {t} = useLanguage();
    const className = "button-"+theme;
    return(
        <Button onClick={toggleTheme} className={className} label={t('changeTheme')}/>

    )
}