import React, { useState } from 'react';

function CalculadoraIMC() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    const alturaEmMetros = altura / 100;
    const resultadoIMC = peso / (alturaEmMetros * alturaEmMetros);
    setImc(resultadoIMC.toFixed(2));
    setClassificacao(classificarIMC(resultadoIMC));
  };

  const classificarIMC = (imc) => {
    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      return 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
      return 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
      return 'Obesidade grau 1';
    } else if (imc >= 35 && imc < 39.9) {
      return 'Obesidade grau 2';
    } else {
      return 'Obesidade grau 3';
    }
  };

  return (
    <div>
      <input
        type="number"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        placeholder="Altura (cm)"
      />
      <input
        type="number"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        placeholder="Peso (kg)"
      />
      <button onClick={calcularIMC}>Calcular IMC</button>
      {imc && (
        <>
          <p>Seu IMC é: {imc}</p>
          <p>Classificação: {classificacao}</p>
        </>
      )}
    </div>
  );
}

export default CalculadoraIMC;
