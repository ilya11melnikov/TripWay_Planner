import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { TripProvider } from './context/TripContext';
import './styles/global.scss';

// Получаем basename из process.env.PUBLIC_URL (устанавливается автоматически из homepage в package.json)
const getBasename = () => {
  // process.env.PUBLIC_URL содержит путь из homepage (например, "/TripWay_Planner" или "")
  // Убираем trailing slash если есть
  const publicUrl = process.env.PUBLIC_URL || '';
  return publicUrl.endsWith('/') ? publicUrl.slice(0, -1) : publicUrl;
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

