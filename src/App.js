import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Simulacion from './components/Simulacion.js';
import NavBar from './components/NavBar.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import GridComplexExample from "./components/Solicitud.js"
import { Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/simulacion' element={ <Simulacion/>}/>
          <Route path ='/registroPrestamo' element={ <GridComplexExample/>}/>

        </Routes>
      </BrowserRouter>     
        
    </div>
  );
}

export default App;
