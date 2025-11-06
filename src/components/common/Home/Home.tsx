import React from "react";
import { useLanguage } from "src/components/LanguageProvider";

export const Home: React.FC = () => {

    const {t} = useLanguage();
    return(        
        <>
            {t('welcome')}
        </>
    )
}