import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import './App.css';

// Punto de entrada de la aplicación. Se utiliza HashRouter para que las rutas funcionen
// correctamente en GitHub Pages (que solo sirve archivos estáticos).

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);