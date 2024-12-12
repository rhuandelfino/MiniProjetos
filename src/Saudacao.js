import React, { useState } from 'react';

function Saudacao() {
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            Digite seu nome: 
            <input
              type="text"
              value={name}
              onChange={handleInputChange}
              placeholder="Seu nome"
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <h1>Olá, {name}!</h1>
      )}
    </div>
  );
}

export default Saudacao;
