import React, { useState } from 'react';

function Carrossel({ imagens }) {
  const [indiceAtual, setIndiceAtual] = useState(0);

  const proximaImagem = () => {
    setIndiceAtual((indiceAtual + 1) % imagens.length);
  };

  const imagemAnterior = () => {
    setIndiceAtual((indiceAtual - 1 + imagens.length) % imagens.length);
  };

  return (
    <div>
      <img src={imagens[indiceAtual]} alt={`imagem-${indiceAtual}`} style={{ width: '100%', height: 'auto' }} />
      <div>
        <button onClick={imagemAnterior}>Anterior</button>
        <button onClick={proximaImagem}>Próxima</button>
      </div>
    </div>
  );
}

export default Carrossel;