//import logo from './logo.svg';
import './App.css';
import './components/HelloWorld'
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'


function App() {
  const nome = "Michael";

  function soma(a, b){
    return a + b
  }

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá {nome}, seja bem vindo</p>
      <p>Soma: {soma(1, 3)}</p>
      <HelloWorld/>
      <SayMyName nome = "Maria"/>
      <SayMyName nome={nome}/>
      <Pessoa 
        nome="Michael" 
        idade="28" 
        profissao="Dev" 
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
