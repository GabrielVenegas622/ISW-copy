import React, { useEffect } from 'react';
import ToDo from './ToDo';
import { actualizarSolicitud, actualizarComment} from "../../Api/solicitudesFront";

import 'bootstrap/dist/css/bootstrap.min.css';

function Solicitud(prop){
    const {name, category, index, apellido, RUT, comentario, Comuna, Ciudad, Monto, Plazo, Tasa, ValorCreditoUF, ValorCreditoCLP, update, setUpdate, id, nombreAgente, apellidoAgente} = prop;

    const modalId = `staticBackdrop-${id}${index}`;
    const modal2ndId = `staticBackdrop-${id}${index}2nd`;
    const aprobarId = `staticBackdrop-aprobar${id}${index}`;
    const eliminarId = `staticBackdrop-eliminar${id}${index}`;
    const derivarId = `staticBackdrop-derivar${id}${index}`;


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
      
      const handleDerivarClick = async () => {
        try {
          console.log(`SOLICITUD de ${name} ${apellido} DERIVADA!`);
          var sugerencias = document.getElementById(`floatingTextarea${derivarId}`).value;

          console.log('Sugerencias:', sugerencias);
          await actualizarSolicitud(id, '2');
          await actualizarComment(id, sugerencias);

          setUpdate(prevUpdate => prevUpdate + 1);

        } catch (error) {
          console.error('Error al derivar la solicitud:', error);
          // Manejar el error según tus necesidades
        }
      };

    useEffect(() => {
        const aprobarBtn = document.getElementById(aprobarId);
        const eliminarBtn = document.getElementById(eliminarId);
        const derivarBtn = document.getElementById(derivarId);

        if (aprobarBtn) {
        aprobarBtn.addEventListener("click", handleAprobarClick);
        }

        if (eliminarBtn) {
        eliminarBtn.addEventListener("click", handleEliminarClick);
        }

        if (derivarBtn) {
        derivarBtn.addEventListener("click", handleDerivarClick);
        }

        return () => {
        // Limpiar event listeners al desmontar el componente
        if (aprobarBtn) {
            aprobarBtn.removeEventListener("click", handleAprobarClick);
        }
        if (eliminarBtn) {
            eliminarBtn.removeEventListener("click", handleEliminarClick);
        }
        if (derivarBtn) {
            derivarBtn.removeEventListener("click", handleDerivarClick);
        }
        };
    }, [update,]);
    
    return (
        <div className="card border-success text-center mb-3" >
            <div className="card-body">
                <h5 className="card-title">{name} {apellido}</h5>
                <p className="card-text">Categoría {category}</p>
                <p className="card-text">Agente: {nombreAgente} {apellidoAgente}</p>
                <p className="card-text"></p>
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target={`#${modalId}`}> Revisar </button>
                    <div className="modal fade" id={modalId} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={modalId} aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={modalId}>[{category}]      {name} </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                        <div className="card border-success mb-3">
                            <div className="card-header text-success">Información Cliente:</div>
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
                                    <h6 className="card-title text-success">Solicitud de Préstamo:</h6>
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
                            <p>Esta sería la to do List para ayudar al Agente Comercial:</p>
                            {ToDo(category, index)}
                        </div>
                            <div className="modal-footer">
                                <button type="button" id={eliminarId} className="btn btn-secondary" data-bs-dismiss="modal">Rechazar</button>
                                <button type="button" id={`${derivarId}prev`} className="btn btn-warning" data-bs-target={`#${modal2ndId}`} data-bs-dismiss="modal" data-bs-toggle="modal">Derivar</button>
                                <button type="button" id={aprobarId} className="btn btn-success" data-bs-dismiss="modal">Aprobar</button>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
            <div className="modal fade" id={`${modal2ndId}`} aria-hidden="true" aria-labelledby={modal2ndId} tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id={modal2ndId}>Derivación Solicitud de {name} {apellido}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id={`floatingTextarea${derivarId}`}></textarea>
                            <label htmlFor={`floatingTextarea${derivarId}`}>Sugerencias para el Supervisor</label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" id={derivarId} className="btn btn-warning" data-bs-dismiss="modal">Enviar</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Solicitud;