import React, { useState } from 'react';

function ListaNomes() {
  const [nomes, setNomes] = useState([]);
  const [novoNome, setNovoNome] = useState('');

  const adicionarNome = () => {
    setNomes([...nomes, novoNome]);
    setNovoNome('');
  };

  return (
    <div>
      <input
        type="text"
        value={novoNome}
        onChange={(e) => setNovoNome(e.target.value)}
      />
      <button onClick={adicionarNome}>Adicionar Nome</button>
      <ul>
        {nomes.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaNomes;