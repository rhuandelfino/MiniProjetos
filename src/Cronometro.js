import React, { useState, useEffect } from 'react';

function Cronometro() {
  const [horas, setHoras] = useState(0);          // Estado para horas
  const [minutos, setMinutos] = useState(0);      // Estado para minutos
  const [segundos, setSegundos] = useState(0);    // Estado para segundos
  const [milissegundos, setMilissegundos] = useState(0);  // Estado para milissegundos
  const [ativo, setAtivo] = useState(false);      // Estado para controlar se o cronômetro está ativo

  useEffect(() => {
    let interval = null;

    // Inicia o cronômetro
    if (ativo) {
      interval = setInterval(() => {
        setMilissegundos(prev => {
          if (prev === 99) {
            setSegundos(prevSegundos => {
              if (prevSegundos === 59) {
                setMinutos(prevMinutos => {
                  if (prevMinutos === 59) {
                    setHoras(prevHoras => prevHoras + 1);  // Incrementa as horas a cada 60 minutos
                    return 0;  // Zera minutos
                  }
                  return prevMinutos + 1;  // Incrementa os minutos
                });
                return 0;  // Zera os segundos
              }
              return prevSegundos + 1;  // Incrementa os segundos
            });
            return 0;  // Zera os milissegundos
          }
          return prev + 1;  // Incrementa os milissegundos
        });
      }, 10);  // Intervalo de 10ms (para milissegundos)
    } else if (!ativo && (milissegundos !== 0 || segundos !== 0 || minutos !== 0 || horas !== 0)) {
      clearInterval(interval);  // Para o cronômetro quando não estiver ativo
    }

    // Limpeza do intervalo ao desmontar o componente ou mudar o estado
    return () => clearInterval(interval);
  }, [ativo, milissegundos, segundos, minutos, horas]);  // Dependências para que o efeito seja executado quando algum estado mudar

  // Função para resetar o cronômetro
  const reset = () => {
    setHoras(0);
    setMinutos(0);
    setSegundos(0);
    setMilissegundos(0);
    setAtivo(false);
  };

  return (
    <div>
      <h2>
        {String(horas).padStart(2, '0')}:{String(minutos).padStart(2, '0')}:
        {String(segundos).padStart(2, '0')}:{String(milissegundos).padStart(2, '0')}
      </h2>
      <button onClick={() => setAtivo(!ativo)}>
        {ativo ? 'Pausar' : 'Iniciar'}
      </button>
      <button onClick={reset}>Resetar</button>
    </div>
  );
}

export default Cronometro;
