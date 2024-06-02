//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import NaveBar from './components/layout/NaveBar';
import Footer from './components/layout/Footer';

function App() {

  return (
    <Router>
      <NaveBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route  path='/empresa' element={<Empresa/>}></Route>
        <Route  path='/contato' element={<Contato/>}></Route>
      </Routes>
      <Footer/>

    </Router>
  )
}

export default App;
