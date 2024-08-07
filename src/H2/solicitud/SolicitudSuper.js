import React, { useEffect } from 'react';
import ToDo from './ToDo';
import { actualizarSolicitud, actualizarComment} from "../../Api/solicitudesFront";

import 'bootstrap/dist/css/bootstrap.min.css';

function SolicitudSuper(prop){
    const {name, category, index, apellido, RUT, comentario, Comuna, Ciudad, Monto, Plazo, Tasa, ValorCreditoUF, ValorCreditoCLP, update, setUpdate, id, nombreAgente, apellidoAgente, ac, nombreAC} = prop;

    const modalId = `staticBackdrop-SU${id}${index}`;
    const aprobarId = `staticBackdrop-aprobarSU${id}${index}`;
    const eliminarId = `staticBackdrop-eliminarSU${id}${index}`;


    const handleAprobarClick = async () => {
        try {
          console.log(`SOLICITUD de ${name} ${apellido} y id ${id} APROBADA!`);
          await actualizarSolicitud(id, '1');
          setUpdate(prevUpdate => prevUpdate + 1);
        } catch (error) {
          console.error('Error al aprobar la solicitud:', error);
          // Manejar el error según tus necesidades
        }
      };
      
      const handleEliminarClick = async () => {
        try {
          console.log(`SOLICITUD de ${name} ${apellido} ELIMINADA!`);
          await actualizarSolicitud(id, '0');
          setUpdate(prevUpdate => prevUpdate + 1);
        } catch (error) {
          console.error('Error al eliminar la solicitud:', error);
          // Manejar el error según tus necesidades
        }
      };

    useEffect(() => {
        const aprobarBtn = document.getElementById(aprobarId);
        const eliminarBtn = document.getElementById(eliminarId);

        if (aprobarBtn) {
        aprobarBtn.addEventListener("click", handleAprobarClick);
        }

        if (eliminarBtn) {
        eliminarBtn.addEventListener("click", handleEliminarClick);
        }

        return () => {
        // Limpiar event listeners al desmontar el componente
        if (aprobarBtn) {
            aprobarBtn.removeEventListener("click", handleAprobarClick);
        }
        if (eliminarBtn) {
            eliminarBtn.removeEventListener("click", handleEliminarClick);
        }
        };
    }, [update,]);
    
    return (
        <div className="card border-warning text-center mb-3" >
            <div className="card-body ">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Categoría {category}</p>
                <p className="card-text">Agente Venta: {nombreAgente} {apellidoAgente}</p>
                <p className="card-text">{ac}{nombreAC}</p>
                <button type="button" className="btn btn-warning " data-bs-toggle="modal" data-bs-target={`#${modalId}`}> Revisar </button>
                    <div className="modal fade" id={modalId} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={modalId} aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={modalId}>[{category}]      {name} </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                        <div className="card border-warning mb-3">
                            <div className="card-header border-warning">Información Cliente:</div>
                            <div className="card-body">
                                <div className="container">
                                    <div className="row justify-content-md-center">
                                                <div className="col-md-auto">
                                                    <h6 className="card-title">{RUT}</h6>
                                                </div>
                                                <div className="col-md-auto">
                                                    <h6 className="card-title">{name} {apellido}</h6>
                                                </div>
                                                <div className="col-md-auto">
                                                    <h6 className="card-title">{Comuna}, {Ciudad}</h6>
                                                </div>
                                    </div>
                                    <h6 className="card-title text-warning">Solicitud de Préstamo:</h6>
                                    <div className="card">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <div className="row">
                                                    <div className="col">
                                                            Crédito (UF):<br></br>
                                                            {Monto}
                                                    </div>
                                                    <div className="col">
                                                            Plazo (Meses):<br></br>
                                                            {Plazo}
                                                    
                                                    </div>
                                                    <div className="col">
                                                            Tasa:<br></br>
                                                            {Tasa}%
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="row">
                                                    <div className="col">
                                                            Cuota (UF): <br></br>{ValorCreditoUF}
                                                    </div>
                                                    <div className="col">
                                                                Cuota (CLP): <br></br>{ValorCreditoCLP}
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                            </div>
                            </div>
                        </div>
                        <h4 className="text-warning">Sugerencia a revisar: </h4>
                            <div className="card  border-warning">
                                    <div className="card-body ">
                                    {comentario}
                                    </div>
                            </div>
                        </div>
                            <div className="modal-footer">
                                <button type="button" id={eliminarId} className="btn btn-secondary" data-bs-dismiss="modal">Rechazar</button>
                                <button type="button" id={aprobarId} className="btn btn-warning" data-bs-dismiss="modal">Aprobar</button>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
        
    );
};

export default SolicitudSuper;