//import logo from './logo.svg';
import './App.css';
import OutraLista from './components/OutraLista';

function App() {
  
  const meusItens = ['React', 'Vue', 'Angular']

  return (
    <div className="App">
      <h2>Renderização de listas</h2>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>
    
    </div>
  );
}

export default App;
