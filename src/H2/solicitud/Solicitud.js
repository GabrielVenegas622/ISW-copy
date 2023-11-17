import React from 'react';
import ToDo from './ToDo';

import 'bootstrap/dist/css/bootstrap.min.css';

function Solicitud(prop){
    const {name, category, index} = prop;
    const modalId = `staticBackdrop-${index}`;
    
    return (
        <div class="card text-center mb-3" style={{width: '15rem'}}>
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
                            <p>##aquí va la infomación del préstamo##</p>
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