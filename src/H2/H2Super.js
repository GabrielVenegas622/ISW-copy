import SolicitudSuper from "./solicitud/SolicitudSuper";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Solicitudes } from "../Api/solicitudesFront";
import { useState, useEffect } from "react";


function H2Super() {
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

          } catch (error) {
            console.error('Error fetching data:', error.message);
          }
        };
    
        fetchData();
      }, [,update]);

    function desplegarSolicitudes(data) {
      const role = localStorage.getItem("role");
        let content;
        let aux1= '', aux2='';
      
        if (!data) {
          content = <p>No hay solicitudes disponibles.</p>;
        } else {
            //console.log("AAAAAAAAAAAAAA",data)
            //console.log(Array.isArray(data.solicitudes))
          content = data.map((obj, index) => {
            if (role === "supervisor"){
              aux1 = "Agente Comercial: "
              aux2 = obj.nombreAgente
            }
            if(obj.Estado === "2"){
              return (
                <div className='col' key={index}>
                  <SolicitudSuper
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
                    setUpdate= {setUpdate}
                    comentario={obj.Comentario}
                    id={obj._id}
                    nombreAgente={obj.nombreAgente}
                    apellidoAgente={obj.apellidoAgente}
                    ac={aux1}
                    nombreAC={obj.agenteComercial}
                  />
                </div>
              );
            };
          });
        }
      
        return (
          <div className="container">
            <h1>Solicitudes Pendientes: </h1>
            <div className="filtro" >
              <form>
                <select className="select" onChange={(e) => setFiltro(e.target.value)}>
                  <option value="">Filtrar por</option>
                  <option value="cliente">Cliente</option>
                  <option value="agente">Agente a cargo</option>
                </select>
                <input
                  placeholder="Ingrese nombre"
                  className="input"
                  onChange={(e) => {setBusqueda(e.target.value); 
                  setUpdate(prev => prev+1);}}
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
export default H2Super;