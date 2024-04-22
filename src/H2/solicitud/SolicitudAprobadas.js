import React, { useEffect } from 'react';
import ToDo from './ToDo';
import { actualizarSolicitud, actualizarComment, deleteSolicitud} from "../../Api/solicitudesFront";

import 'bootstrap/dist/css/bootstrap.min.css';

function SolicitudAprobada(prop){
    const {name, category, index, apellido, RUT, comentario, Comuna, Ciudad, Monto, Plazo, Tasa, ValorCreditoUF, ValorCreditoCLP, update, setUpdate, id, nombreAgente, apellidoAgente} = prop;

    const modalId = `staticBackdrop-Ap${id}${index}`;
    const revisarId = `staticBackdrop-revisar${id}${index}`;
    const eliminarId = `staticBackdrop-eliminarAp${id}${index}`;


    const handleRevisarClick = async () => {
        try {
          console.log(`SOLICITUD de ${name} ${apellido} y id ${id} APROBADA!`);
          await actualizarSolicitud(id, '0');
          setUpdate(prevUpdate => prevUpdate + 1);
        } catch (error) {
          console.error('Error al aprobar la solicitud:', error);
          // Manejar el error según tus necesidades
        }
      };
      
      const handleEliminarClick = async () => {
        try {
          console.log(`SOLICITUD de ${name} ${apellido} ELIMINADA!`);
          await deleteSolicitud(id);
          setUpdate(prevUpdate => prevUpdate + 1);
        } catch (error) {
          console.error('Error al eliminar la solicitud:', error);
          // Manejar el error según tus necesidades
        }
      };

    useEffect(() => {
        const aprobarBtn = document.getElementById(revisarId);
        const eliminarBtn = document.getElementById(eliminarId);

        if (aprobarBtn) {
        aprobarBtn.addEventListener("click", handleRevisarClick);
        }

        if (eliminarBtn) {
        eliminarBtn.addEventListener("click", handleEliminarClick);
        }

        return () => {
        // Limpiar event listeners al desmontar el componente
        if (aprobarBtn) {
            aprobarBtn.removeEventListener("click", handleRevisarClick);
        }
        if (eliminarBtn) {
            eliminarBtn.removeEventListener("click", handleEliminarClick);
        }
        };
    }, [update,]);
    
    return (
        <div className="card border-primary text-center mb-3" >
            <div className="card-body ">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Categoría {category}</p>
                <p className="card-text">Agente: {nombreAgente} {apellidoAgente}</p>
                <button type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target={`#${modalId}`}> Revisar </button>{' '}
                

                    <div className="modal fade" id={modalId} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={modalId} aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={modalId}>[{category}]      {name} </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                        <div className="card border-primary mb-3">
                            <div className="card-header border-primary">Información Cliente:</div>
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
                                    <h6 className="card-title text-primary">Solicitud de Préstamo:</h6>
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
                        </div>
                            <div className="modal-footer">
                                <button type="button" id={revisarId} className="btn btn-secondary" data-bs-dismiss="modal">Revisión</button>
                                <button type="button" id={eliminarId} className="btn btn-danger" data-bs-dismiss="modal">Eliminar</button>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
        
    );
};

export default SolicitudAprobada;