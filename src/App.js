import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Simulacion from './components/Simulacion.js';
import NavBar from './components/NavBar.js'
import NavBarSupervisor from './components/NavBarSupervisor';
import 'bootstrap/dist/css/bootstrap.min.css';
import GridComplexExample from "./components/Solicitud.js"
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import H2 from "./H2/H2.js"
import Signup from './components/signup/index.jsx';
import Login from './components/Login/index.jsx';
import Bienvenida from './components/bienvenida/BIenvenida';

function App() {
  const user = localStorage.getItem("token");
  const rol = localStorage.getItem("role");
  
  return (
    <div className='App'>
      <BrowserRouter>
          {user && (rol === "comercial" || rol === "ventas") && <NavBar/>}
          {user && rol === "supervisor" && <NavBarSupervisor/>}
        <Routes>
          {user && <Route path='/'element= {<Bienvenida/>}/>}
          <Route path='/simulacion' element={ <Simulacion/>}/>
          <Route path ='/registroPrestamo' element={ <GridComplexExample/>}/>
          <Route path ='/solicitudes' element={ <H2/>}/>
          <Route path='/signup' element= {<Signup/>}/>
          <Route path='/login' element= {<Login/>}/>
          <Route path='/home' element= {<Bienvenida/>}/>
          <Route path='/' element= {<Navigate replace to = "/login"/>}/>
        </Routes>
      </BrowserRouter>     
        
    </div>
  );
}

export default App;
