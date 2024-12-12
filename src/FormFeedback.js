import React, { useState } from 'react';

function FormFeedback() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação dos campos
    if (nome === '' || email === '' || mensagem === '') {
      setErro('Por favor, preencha todos os campos.');
    } else if (!email.includes('@')) {
      setErro('Por favor, insira um email válido.');
    } else {
      setErro('');
      alert('Feedback enviado com sucesso!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Mensagem:</label>
        <textarea
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        ></textarea>
      </div>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      <button type="submit">Enviar Feedback</button>
    </form>
  );
}

export default FormFeedback;
