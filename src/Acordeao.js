import React, { useState } from 'react';

function Acordeao() {
  // Definindo um estado para armazenar as seções abertas
  const [abertos, setAbertos] = useState({});

  // Função para alternar o estado da seção
  const toggleAcordeao = (index) => {
    setAbertos(prev => ({
      ...prev,
      [index]: !prev[index] // Alterna a visibilidade da seção clicada
    }));
  };

  // Dados para as seções de acordeão (pode ser dinâmico ou uma lista estática)
  const secoes = [
    { titulo: 'Seção 1', conteudo: 'Conteúdo da Seção 1' },
    { titulo: 'Seção 2', conteudo: 'Conteúdo da Seção 2' },
    { titulo: 'Seção 3', conteudo: 'Conteúdo da Seção 3' }
  ];

  return (
    <div>
      {secoes.map((secao, index) => (
        <div key={index}>
          <button onClick={() => toggleAcordeao(index)}>
            {abertos[index] ? 'Esconder' : 'Mostrar'} {secao.titulo}
          </button>
          {abertos[index] && <p>{secao.conteudo}</p>}
        </div>
      ))}
    </div>
  );
}

export default Acordeao;
