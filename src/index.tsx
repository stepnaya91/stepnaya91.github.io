import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { ThemeProvider } from './components/ThemeProvider'
import { LanguageProvider } from './components/LanguageProvider';
import { Navigation } from './navigation/Navigation';
import { Provider } from 'react-redux';
import { store } from '../store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <Provider store={store}>
            <Navigation>
              <App />
            </Navigation>
        </Provider>
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
);
