import React, { useState, useEffect } from 'react';

function ContagemRegressiva() {
  const [segundos, setSegundos] = useState(0); // Armazena o valor inserido pelo usuário
  const [tempoRestante, setTempoRestante] = useState(null); // Armazena o tempo restante da contagem

  // Efeito que reduz o tempo restante a cada segundo
  useEffect(() => {
    if (tempoRestante > 0) {
      const timer = setTimeout(() => setTempoRestante(tempoRestante - 1), 1000);
      return () => clearTimeout(timer); // Limpa o temporizador ao desmontar ou quando o tempo muda
    }
  }, [tempoRestante]);

  // Função para iniciar a contagem regressiva
  const iniciarContagem = () => {
    setTempoRestante(segundos); // Inicia a contagem com o valor inserido
  };

  return (
    <div>
      <input
        type="number"
        value={segundos}
        onChange={(e) => setSegundos(e.target.value)} // Atualiza o valor dos segundos
        placeholder="Segundos"
      />
      <button onClick={iniciarContagem}>Iniciar Contagem Regressiva</button>
      {tempoRestante !== null && (
        <p>{tempoRestante > 0 ? tempoRestante : 'Tempo esgotado!'}</p>
      )}
    </div>
  );
}

export default ContagemRegressiva;
