import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { TripProvider } from './context/TripContext';
import './styles/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
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

