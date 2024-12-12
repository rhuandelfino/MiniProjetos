import React, { useState, useEffect } from 'react';

function Relogio() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // Cria um intervalo para atualizar o estado a cada segundo
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup: remove o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []); // O array vazio garante que o useEffect só seja chamado uma vez, após o primeiro render

  return <p className='TECH'>Hora atual: {time}</p>;
}

export default Relogio;
