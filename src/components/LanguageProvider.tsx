import i18next from "../i18n/i18next";
import React, { createContext, ReactNode, useContext, useState } from "react"

interface LanguageContextType {
    language: string;
    changeLanguage: (lang: string) => void;
    t: (key: string, options?: any) => string;
}

const LanguageContext = createContext<LanguageContextType>({
    language: "ru",
    changeLanguage: () => {/*Do nothing*/},
    t: (key: string) => key,
})

type LanguageProviderProps = {
    children: ReactNode
}

export const useLanguage = () => {
    return useContext(LanguageContext);
}

export const LanguageProvider = ({children}: LanguageProviderProps) => {
    const [language, setLanguage] = useState(i18next.language);


    const changeLanguage = (lang : string) => {
        setLanguage(lang);
        i18next.changeLanguage(lang);
    }

    return (
        <LanguageContext.Provider value={{language, changeLanguage, t:i18next.t}}>
            {children}
        </LanguageContext.Provider>
    )
}