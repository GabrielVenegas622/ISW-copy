import React , { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'bootstrap';

function Simulacion( ){
    const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());  
    const [currentUF, setCurrentUF] = useState('');

    const [valorCredito, setValorCredito] = useState(0);
    const [plazo, setPlazo] = useState(0);
    const [tasaMensual, setTasaMensual] = useState(0);
    const [cuotaUF, setCuotaUF] = useState(0);

    const [showResult, setShowResult] = useState(false);

    const fetchUFValue = async () => {

        try {
            const response = await fetch('https://api.cmfchile.cl/api-sbifv3/recursos_api/uf?apikey=0e425b4c9e18ca3a1bfa76cd0d02a5cf21cdf8cf&formato=json');
            const data = await response.json();
            return parseFloat(data.UFs[0].Valor)*1000;
    
        } catch (error) {
            console.error('Error:', error);
        }
    };


    useEffect(() => {

        const fetchData = async () => {
           const au = await fetchUFValue();
           if (au) {
             setCurrentUF(au);
           }
        };
        fetchData();
       }, []);

    const calculateCuotaUF = () => {
        //Aqui calculamos la weaita
        const cuota = (valorCredito) / ((1-(1+tasaMensual)**(-plazo))/tasaMensual)
        setCuotaUF(cuota)
        setShowResult(true)

    }

    return (
        <div class= 'col-md-6 mx-auto'>

            <div class="card text-center">
                    <div class="card-header">
                        Simulación de préstamo 
                    </div>

                    <div class="card-body">

                    <div class="container text-center">
                    <div class="row">
                            <div class="card border-warning mb-3"style={{ maxWidth: '18rem' }}>
                                <div class="card-header">valor UF al día  </div>
                            <div class="card-body">
                                <h5 class="card-title">${currentUF}</h5>
                                <p class="card-text">{currentDate}</p>
                            </div>
                            </div>  
                        <div class="col">
                            <div class="form-floating mb-2">
                                <input type="number" class="form-control" placeholder="Valor del credito" onChange={(e) => setValorCredito(e.target.value)}></input>
                                <label for="floatingInput">Valor del crédito</label>
                            </div>
                            <div class="form-floating mb-2">
                                <input type="number" class="form-control" id="floatingPassword" placeholder="Plazo(Meses)" onChange={(e) => setPlazo(e.target.value)}></input>
                                <label for="floatingPassword">Plazo (meses)</label>
                            </div>
                            <div class="form-floating mb-2">
                                <input type="number" class="form-control" id="floatingInput" placeholder="Tasa Mensual" onChange={(e) => setTasaMensual((e.target.value)/100)}></input>
                                <label for="floatingInput">Tasa Mensual</label>
                            </div>
                        </div>
                    </div>
                    </div>

                        <button className='btn btn-primary' onClick={calculateCuotaUF}> Generar</button>
                        {showResult && (
                            <p className='card-text'>La cuota calculada es: {cuotaUF} </p>
                        )}
                        
                    </div>
                    <div class="card-footer text-body-secondary">
                        
                    </div>
                </div>

        </div>
        

    );

};

export default Simulacion;