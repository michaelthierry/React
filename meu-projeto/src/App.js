//import logo from './logo.svg';
import './App.css';
import './components/HelloWorld'
import HelloWorld from './components/HelloWorld';

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
    </div>
  );
}

export default App;
