import React from 'react';
import ReactDOM from 'react-dom/client';
//import './app/index.css';
import App from './app/App';
import { ThemeProvider } from './components/ThemeProvider'
import { LanguageProvider } from './components/LanguageProvider';
import { Navigation } from './navigation/Navigation';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <Navigation>
          <App />
        </Navigation>
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
);
