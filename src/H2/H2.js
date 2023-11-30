import Solicitud from "./solicitud/Solicitud";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Solicitudes } from "../Api/solicitudesFront";
import { useState, useEffect } from "react";


function H2() {
    const [data, setData] = useState([]);
    const [update, setUpdate] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await Solicitudes();
            
            setData(result.data.solicitudes);
            console.log("los miau 🤨", result.data.solicitudes);

          } catch (error) {
            console.error('Error fetching data:', error.message);
          }
        };
    
        fetchData();
      }, []);

    function desplegarSolicitudes(data) {
        let content;
      
        if (!data) {
          content = <p>No hay solicitudes disponibles.</p>;
        } else {
            console.log("AAAAAAAAAAAAAA",data)
            console.log(Array.isArray(data.solicitudes))
          content = data.map((obj, index) => (
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
              />
            </div>
          ));
        }
      
        return (
          <div className="container">
            <h1>Solicitudes Pendientes: </h1>
            <div className="row row-cols-1 row-cols-md-5 g-4">
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