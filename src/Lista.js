import React, { useState, useEffect } from 'react';
import Lista from './Lista'; // Importe o componente Lista

function App() {
  const [items, setItems] = useState([]); // Inicializa como um array vazio

  useEffect(() => {
    // Simulação de carregamento de dados
    setTimeout(() => {
      setItems(['Item 1', 'Item 2', 'Item 3']); // Atualiza o estado com itens
    }, 2000); // Simula um atraso de 2 segundos
  }, []);

  return (
    <div>
      <h1>Minha Lista de Itens</h1>
      <Lista items={items} /> {/* Passa 'items' como propriedade */}
    </div>
  );
}

export default App;
