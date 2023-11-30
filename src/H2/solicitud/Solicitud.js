import React from 'react';
import ToDo from './ToDo';

import 'bootstrap/dist/css/bootstrap.min.css';

function Solicitud(prop){
    const {name, category, index, apellido, RUT, comentario, Comuna, Ciudad, Monto, Plazo, Tasa, ValorCreditoUF, ValorCreditoCLP} = prop;
    const modalId = `staticBackdrop-${index}`;
    
    return (
        <div class="card text-center mb-3" >
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">Categoría {category}</p>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${modalId}`}> Revisar </button>
                    <div class="modal fade" id={modalId} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby={modalId} aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id={modalId}>[{category}]      {name} </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                        <div class="card border-primary mb-3">
                            <div class="card-header text-primary">Información Cliente:</div>
                            <div class="card-body">
                                <div class="container">
                                    <div class="row justify-content-md-center">
                                                <div class="col-md-auto">
                                                    <h6 class="card-title">{RUT}</h6>
                                                </div>
                                                <div class="col-md-auto">
                                                    <h6 class="card-title">{name} {apellido}</h6>
                                                </div>
                                                <div class="col-md-auto">
                                                    <h6 class="card-title">{Comuna}, {Ciudad}</h6>
                                                </div>
                                    </div>
                                    <h6 class="card-title text-primary">Solicitud de Préstamo:</h6>
                                    <div class="card">
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">
                                                <div class="row">
                                                    <div class="col">
                                                            Crédito (UF):<br></br>
                                                            {Monto}
                                                    </div>
                                                    <div class="col">
                                                            Plazo (Meses):<br></br>
                                                            {Plazo}
                                                    
                                                    </div>
                                                    <div class="col">
                                                            Tasa:<br></br>
                                                            {Tasa}%
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="list-group-item">
                                                <div class="row">
                                                    <div class="col">
                                                            Cuota (UF): <br></br>{ValorCreditoUF}
                                                    </div>
                                                    <div class="col">
                                                                Cuota (CLP): <br></br>{ValorCreditoCLP}
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                            </div>
                            </div>
                        </div>
                            <p>Esta sería la to do List para ayudar al supervisor:</p>
                            {ToDo(category, index)}
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Rechazar</button>
                            <button type="button" class="btn btn-primary">Aprobar</button>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default Solicitud;