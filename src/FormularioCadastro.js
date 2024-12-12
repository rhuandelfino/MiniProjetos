import React, { useState } from 'react';

function FormularioCadastro() {
  const [email, setEmail] = useState(''); // Estado para o campo de email
  const [password, setPassword] = useState(''); // Estado para o campo de senha
  const [errors, setErrors] = useState({}); // Estado para armazenar erros de validação

  // Função de validação
  const validate = () => {
    const newErrors = {}; // Objeto para armazenar os erros
    if (!email.includes('@')) newErrors.email = 'Email inválido'; // Verifica se o email contém '@'
    if (password.length < 6) newErrors.password = 'A senha deve ter pelo menos 6 caracteres'; // Verifica se a senha tem menos de 6 caracteres
    setErrors(newErrors); // Atualiza o estado de erros
    return Object.keys(newErrors).length === 0; // Se não houver erros, retorna true
  };

  // Função que será chamada ao enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o comportamento padrão de recarregar a página
    if (validate()) { // Se a validação passar
      alert('Usuário cadastrado com sucesso!'); // Exibe o prompt com a mensagem de sucesso
      setEmail(''); // Limpa o campo de email
      setPassword(''); // Limpa o campo de senha
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
        />
        {errors.email && <p>{errors.email}</p>} {/* Exibe erro de email, se houver */}
      </div>
      <div>
        <label>Senha:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Atualiza o estado da senha
        />
        {errors.password && <p>{errors.password}</p>} {/* Exibe erro de senha, se houver */}
      </div>
      <button type="submit">Cadastrar</button> {/* Botão para enviar o formulário */}
    </form>
  );
}

export default FormularioCadastro;
