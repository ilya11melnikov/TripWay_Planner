import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { TripProvider } from './context/TripContext';
import './styles/global.scss';

// Получаем basename из package.json homepage или используем process.env.PUBLIC_URL
const getBasename = () => {
  // В production используем homepage из package.json
  // В development это будет пустая строка
  if (process.env.NODE_ENV === 'production') {
    try {
      const packageJson = require('../package.json');
      const homepage = packageJson.homepage || '/';
      // Убираем trailing slash и возвращаем путь
      return homepage === '/' ? '' : homepage.replace(/\/$/, '');
    } catch (e) {
      return '';
    }
  }
  return '';
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter basename={getBasename()}>
      <DndProvider backend={HTML5Backend}>
        <ThemeProvider>
          <TripProvider>
            <App />
          </TripProvider>
        </ThemeProvider>
      </DndProvider>
    </BrowserRouter>
  </React.StrictMode>
);

