import React, { useState } from "react";
import "../../../app/App.scss";
import { useTheme } from "../../ThemeProvider";
import { useLanguage } from "../../LanguageProvider";


export const ChangeLanguage: React.FC = () => {
    const [selectedValue,setSelectedValue] = useState<string>('ru');
    const {changeLanguage} = useLanguage();
    const {theme} = useTheme();
    const className = "select-"+theme;
    
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const lang=event.target.value;
        setSelectedValue(lang);
        changeLanguage(lang);
    };

  return (
    <div>
      <select className={className} value={selectedValue} onChange={handleChange}>
        <option value="ru">Русский</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}