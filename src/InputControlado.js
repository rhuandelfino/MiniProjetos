// src/InputControlado.js
import React, { useState } from 'react';

function InputControlado() {
  const [inputValue, setInputValue] = useState(''); // Cria o estado para armazenar o valor do input

  return (
    <div>
      <input
        type="text"
        value={inputValue} // Define o valor do input como o valor do estado
        onChange={(e) => setInputValue(e.target.value)} // Atualiza o estado com o valor do input
      />
      <p>Valor: {inputValue}</p> {/* Exibe o valor do estado */}
    </div>
  );
}

export default InputControlado;
