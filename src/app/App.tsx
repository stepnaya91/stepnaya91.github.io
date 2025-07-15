import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { ThemeProvider } from '../components/ThemeProvider';
import { LanguageProvider } from '../components/LanguageProvider';


function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Текст писать тут
            </p>
          </header>
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
