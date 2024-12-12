import React, { useState } from 'react';

function ToDoList() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    setTarefas([...tarefas, { texto: novaTarefa, concluida: false }]);
    setNovaTarefa('');
  };

  const alternarConclusao = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].concluida = !novasTarefas[index].concluida;
    setTarefas(novasTarefas);
  };

  const removerTarefa = (index) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  };

  return (
    <div>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />
      <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index} style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>
            {tarefa.texto}
            <button onClick={() => alternarConclusao(index)}>Concluir</button>
            <button onClick={() => removerTarefa(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;