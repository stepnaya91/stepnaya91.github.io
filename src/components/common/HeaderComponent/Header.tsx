import React from "react"
import { Logo } from "../Logo"
import { ToggleTheme } from "../ToggleThemeComponent/ToggleTheme";
import { useTheme } from "../../ThemeProvider";
import { ChangeLanguage } from "../ChangeLanguageComponent/ChangeLanguage";
import { useLanguage } from "../../LanguageProvider";
import "./Header.scss"

export const Header: React.FC = () => {
    const {theme} = useTheme();
    const {language} = useLanguage();
    const className="header-div-"+theme;
    return(        
        <div className={className}>
            <div className="header-div-logo">
                <Logo/>
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