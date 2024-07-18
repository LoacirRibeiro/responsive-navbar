import {Route, Routes} from 'react-router-dom' 
import './App.css';

import NavBar from './components/navBar/NavBar';
import Home from './components/pages/home/Home';
import Sobre from './components/pages/sobre/Sobre';
import Contatos from './components/pages/contatos/Contatos';
import Servicos from './components/pages/servicos/Servicos';


function App() {
  return (
      <div className='App' >
        <NavBar />
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/sobre' element={<Sobre/>} />
          <Route path='/contatos' element={<Contatos />} />
          <Route path='/Servicos' element={<Servicos />} />
        </Routes>
      </div>


  );
}

export default App;
