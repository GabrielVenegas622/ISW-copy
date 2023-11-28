import Solicitud from "./solicitud/Solicitud";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Solicitudes } from "../Api/solicitudesFront";


function H2() {
    const data = Solicitudes();
    console.log("AAAAAAAAAAAAAA",data)
    console.log(Array.isArray(data))


    function desplegarSolicitudes(data){
        return(
        <div class="container">
            <h1>Solicitudes Pendientes: </h1>
            <div class="row row-cols-1 row-cols-md-5 g-4">
                    {data.map((obj, index) => (
                        <div class='col'>
                            <Solicitud
                                index= {index}
                                name={obj.name}
                                category={obj.category}
                            />
                        </div>
                    ))}
            </div>
        </div>

        );
    };
    return(
        desplegarSolicitudes(data)
    );

};
export default H2;