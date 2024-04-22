import Solicitud from "./solicitud/Solicitud";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/solicitud.css'
import { Solicitudes } from "../Api/solicitudesFront";
import { useState, useEffect } from "react";

function H2() {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(0);
  const [filtro, setFiltro] = useState('')
  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await Solicitudes();
        
        setData(result.data.solicitudes.filter(obj => {
          console.log("Se llama a la func")
          console.log( "Busqueda",busqueda)
          console.log("Filtro",filtro)
          if (filtro === 'cliente') {
            return obj.nombre.toLowerCase().includes(busqueda.toLowerCase());
          } else if (filtro === 'agente') {
            return obj.nombreAgente.toLowerCase().includes(busqueda.toLowerCase());
          }
          return true;
        }));
        console.log("los miau 🤨", result.data.solicitudes);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
    fetchData();
  }, [,update]);
  
  function handleInputChangeF(e) {
    setFiltro(e.target.value);
  }

  function handleInputChangeB(e) {
    setBusqueda(e.target.value);
    console.log(e.target.value);
    setUpdate(prev => prev + 1); // Incrementa el estado update para forzar la actualización
  }

  function desplegarSolicitudes(data) {
    let content;

    if (!data) {
      content = <p>No hay solicitudes disponibles.</p>;
    } else {
      content = data.map((obj, index) => {
        if (obj.Estado === "0") {
          return (
            <div className='col' key={index}>
              <Solicitud
                index={index}
                name={obj.nombre}
                apellido={obj.apellido}
                category={obj.Categoria}
                RUT={obj.RUT}
                Comuna={obj.Comuna}
                Ciudad={obj.Ciudad}
                Monto={obj.Monto}
                Plazo={obj.Plazo}
                Tasa={obj.Tasa}
                ValorCreditoUF={obj.ValorCreditoUF}
                ValorCreditoCLP={obj.ValorCreditoCLP}
                update={update}
                setUpdate={setUpdate}
                id={obj._id}
                nombreAgente={obj.nombreAgente}
                apellidoAgente={obj.apellidoAgente}
              />
            </div>
          );
        }
      });
    }

    return (
      <div className="container">
        <h1>Solicitudes Pendientes: </h1>
        <div className="filtro" >
          <form>
            <select className="select" onChange={handleInputChangeF}>
              <option value="">Filtrar por</option>
              <option value="cliente">Cliente</option>
              <option value="agente">Agente a cargo</option>
            </select>
            <input
              placeholder="Ingrese nombre"
              className="input"
              onChange={handleInputChangeB}
            />
          </form>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {content}
        </div>
      </div>
    );
  }

  return (
    desplegarSolicitudes(data)
  );
};

export default H2;