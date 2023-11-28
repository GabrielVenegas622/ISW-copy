import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Simulacion from './components/Simulacion.js';
import NavBar from './components/NavBar.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import GridComplexExample from "./components/Solicitud.js"
import { Route, Routes, BrowserRouter, Navigate, Router } from 'react-router-dom';
import H2 from "./H2/H2.js"
import Signup from './components/signup/index.jsx';
import Login from './components/Login/index.jsx';
import Main from './components/Main.js';


function App() {
  const user = localStorage.getItem("token");

  return (
    <div className='App'>
      <BrowserRouter>
          {user && <NavBar/>}
        <Routes>
          {user && <Route path='/'/>}
          <Route path='/simulacion' element={ <Simulacion/>}/>
          <Route path ='/registroPrestamo' element={ <GridComplexExample/>}/>
          <Route path ='/solicitudes' element={ <H2/>}/>
          <Route path='/signup' element= {<Signup/>}/>
          <Route path='/login' element= {<Login/>}/>
          <Route path='/' element= {<Navigate replace to = "/login"/>}/>
        </Routes>
      </BrowserRouter>     
        
    </div>
  );
}

export default App;
