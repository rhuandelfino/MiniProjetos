import logo from './logo.svg';
import './App.css';
import Saudacao from './Saudacao';
import Contador from './Contador';
import ToggleTema from './ToogleTema';
import Cadastro from './Cadastro';
import Lista from './Lista';
import { useEffect, useState } from 'react';
import InputControlado from './InputControlado';
import ListaNomes from './ListaNomes';
import FiltroLista from './FiltroLista';
import Carrossel from './Carrossel';
import JogoAdivinhacao from './JogoAdivinhacao';
import Relogio from './Relogio';
import Cronometro from './Cronometro';
import ToDoList from './ToDoList';
import CalculadoraIMC from './CalculadoraIMC';
import Acordeao from './Acordeao';
import ContagemRegressiva from './ContagemRegressiva';
import FetchDados from './FetchDados';
import FormularioCadastro from './FormularioCadastro';
import Modal from './Modal';
import ExibirDados from './ExibirDados';
import FormFeedback from './FormFeedback';
import Tabs from './Tabs';
import DarkMode from './DarkMode';

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setItems(['Item 1, Item 2, Item 3']);
    }, 2000);
  }, []);

  const itens = ['Gato', 'Cachorro', 'Elefante', 'Tigre', 'Golfinho', 'Papagaio', 'Cavalo']

  const imagens = [
    'https://images.unsplash.com/photo-1516214104700-6d7d4d339a91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  ];

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup: remove o intervalo quando o componente for desmontado
  }, []);

  const classificarIMC = (imc) => {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc >= 18.5 && imc < 24.9) return 'Peso normal';
    if (imc >= 25 && imc < 29.9) return 'Sobrepeso';
    return 'Obesidade';
  };

  return (
    <>
      <div className="titulo-container">
        <h1>Bem-vindo ao Projeto</h1>
      </div>

      <div className="titulo-container">
        <h2>Componente Saudação</h2>
        <Saudacao />
      </div>

      <div className="titulo-container">
        <h2>Componente Contador</h2>
        <Contador />
      </div>

      <div className="titulo-container">
        <h2>Componente "Toggle Tema"</h2>
        <ToggleTema />
      </div>

      <div className="titulo-container">
        <h2>Formulário de Cadastro</h2>
        <Cadastro />
      </div>

      <div className="titulo-container">
        <h2>Lista de Itens Dinâmica</h2>
        <Lista items={items} />
      </div>

      <div className="titulo-container">
        <h2>Componente "Input Controlado"</h2>
        <InputControlado />
      </div>


      <div className="titulo-container">
        <h2>Lista de Nomes</h2>
        <ListaNomes />
      </div>

      <div className="titulo-container">
        <h2>Componente de Filtro de Lista</h2>
        <FiltroLista itens={itens} />
      </div>


      <div className="titulo-container">
        <h2>Carrossel de Imagens</h2>
        <Carrossel imagens={imagens} />
      </div>

      <div className="titulo-container">
        <h2>Jogo de Adivinhação</h2>
        <JogoAdivinhacao />
      </div>

      <div className="titulo-container">
        <h2>Componente "Relógio Digital" com useEffect</h2>
        <Relogio />
      </div>

      <div className="titulo-container">
        <h2>Cronômetro</h2>
        <Cronometro />
      </div>

      <div className="titulo-container">
        <h2>Componente "Lista de Tarefas" com Adição e Remoção</h2>
        <ToDoList />
      </div>

      <div className="titulo-container">
        <h2>Cálculo de IMC</h2>
        <CalculadoraIMC />
      </div>

      <div className="titulo-container">
        <h2>Componente "Acordeão"</h2>
        <Acordeao />
      </div>

      <div className="titulo-container">
        <h2>Componente de Contagem Regressiva</h2>
        <ContagemRegressiva />
      </div>

      <div className="titulo-container">
        <h2>Componente "Fetch de Dados" com useEffect</h2>
        <FetchDados />
      </div>

      <div className="titulo-container">
        <h2>Componente "Formulário de Cadastro" com Validação</h2>
        <FormularioCadastro />
      </div>

      <div className="titulo-container">
        <h2>Componente "Modal"</h2>
        <Modal />
      </div>

      <div className="titulo-container">
        <h2>Exibir Dados de API</h2>
        <ExibirDados />
      </div>

      <div className="titulo-container">
        <h2>Formulário de Feedback com Validação</h2>
        <FormFeedback />
      </div>

      <div className="titulo-container">
        <h2>Componente "Tabs" (Abas)</h2>
        <Tabs />
      </div>

      <div className="titulo-container">
        <h2>Componente "Dark Mode" com Persistência</h2>
        <DarkMode />
      </div>

    </>
  );
}

export default App;
