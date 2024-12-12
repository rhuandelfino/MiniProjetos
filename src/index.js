// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Importando os estilos globais
import App from './App';  // Importando o componente App.js
import reportWebVitals from './reportWebVitals';  // Importando a função para medir performance

// React.StrictMode ajuda a identificar potenciais problemas no código
ReactDOM.render(
  <React.StrictMode>
    <App />  {/* Renderiza o componente principal (App) */}
  </React.StrictMode>,
  document.getElementById('root')  // Renderiza o componente na div com id "root" no HTML
);

// Função para medir performance (opcional)
reportWebVitals();
