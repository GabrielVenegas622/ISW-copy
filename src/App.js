import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Simulacion from './Simulacion.js';
import H2 from './H2/H2.js'

function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/neg' element={<Simulacion />} />
          <Route path='/pro' element={<H2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
