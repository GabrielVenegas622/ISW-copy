import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ToDo(category, ii) {
    const criterios = {
        'S+': ['Criterio S+1', "Criterio S+2", "Criterio S+3"],
        'A': ["Criterio A1", "Criterio A2", "Criterio A3"],
        'B': ["Criterio B1", "Criterio B2", "Criterio B3"],
        'C': ["Criterio C1", "Criterio C2", "Criterio C3"]
    };

    return criterios[category].map((recomendation, index) => {
        const checkId = `${category}${ii}-${index}`;
        return (
            <div className="form-check" key={checkId} style={{ display: 'flex', alignItems: 'center' }}>
                <input className="form-check-input" type="checkbox" value="" id={checkId}  style={{ marginLeft: '5px' }}/>
                <label className="form-check-label" htmlFor={checkId} style={{ marginLeft: '5px', marginBottom: '0' }}>
                    {recomendation}
                </label>
            </div>
        );
    });
}


export default ToDo;