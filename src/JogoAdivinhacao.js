import React, { useState } from 'react';

function JogoAdivinhacao() {
  const gerarNumeroAleatorio = () => Math.floor(Math.random() * 100) + 1;

  const [numeroAleatorio, setNumeroAleatorio] = useState(gerarNumeroAleatorio());
  const [palpite, setPalpite] = useState('');
  const [mensagem, setMensagem] = useState('');

  const verificarPalpite = () => {
    const palpiteNumero = parseInt(palpite, 10);
    if (isNaN(palpiteNumero)) {
      setMensagem('Por favor, insira um número válido.');
    } else if (palpiteNumero < numeroAleatorio) {
      setMensagem('Baixo!');
    } else if (palpiteNumero > numeroAleatorio) {
      setMensagem('Alto!');
    } else {
      setMensagem('Correto! Parabéns!');
    }
  };

  const reiniciarJogo = () => {
    setNumeroAleatorio(gerarNumeroAleatorio());
    setPalpite('');
    setMensagem('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Jogo de Adivinhação</h1>
      <p>Digite um número entre 1 e 100!</p>
      <p style={{ fontWeight: 'bold', color: 'red' }}>
        O número secreto é: {numeroAleatorio} {/* Apenas para testes */}
      </p>
      <input
        type="number"
        value={palpite}
        onChange={(e) => setPalpite(e.target.value)}
        placeholder="Seu palpite"
        style={{ padding: '10px', margin: '10px', width: '200px' }}
      />
      <button onClick={verificarPalpite} style={{ padding: '10px 20px' }}>
        Verificar Palpite
      </button>
      <button onClick={reiniciarJogo} style={{ padding: '10px 20px', marginLeft: '10px' }}>
        Reiniciar Jogo
      </button>
      <p>{mensagem}</p>
    </div>
  );
}

export default JogoAdivinhacao;
