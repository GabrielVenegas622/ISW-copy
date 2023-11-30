import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Simulacion from './components/Simulacion.js';
import NavBar from './components/NavBars/NavBarVentas.js'
import NavBarSupervisor from './components/NavBars/NavBarSupervisor';
import NavBarComercial from './components/NavBars/NavBarComercial';
import 'bootstrap/dist/css/bootstrap.min.css';
import GridComplexExample from "./components/Solicitud.js"
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import H2 from "./H2/H2.js"
import Signup from './components/signup/index.jsx';
import Login from './components/Login/index.jsx';
import Bienvenida from './components/bienvenida/BIenvenida';
import ResponsiveExample from './components/TablaUsuarios/Tabla';

function App() {
  const user = localStorage.getItem("token");
  const rol = localStorage.getItem("role");
  
  return (
    <div className='App'>
      <BrowserRouter>
          {user && rol === "ventas" && <NavBar/>}
          {user && rol === "supervisor" && <NavBarSupervisor/>}
          {user && rol === "comercial" && <NavBarComercial/>}
        <Routes>
          {user && <Route path='/'element= {<Bienvenida/>}/>}
          <Route path='/simulacion' element={ <Simulacion/>}/>
          <Route path ='/registroPrestamo' element={ <GridComplexExample/>}/>
          <Route path ='/solicitudes' element={ <H2/>}/>
          <Route path='/signup' element= {<Signup/>}/>
          <Route path='/login' element= {<Login/>}/>
          <Route path='/home' element= {<Bienvenida/>}/>
          <Route path='/users' element= {<ResponsiveExample/>}/>
          <Route path='/' element= {<Navigate replace to = "/login"/>}/>
        </Routes>
      </BrowserRouter>     
        
    </div>
  );
}

export default App;
