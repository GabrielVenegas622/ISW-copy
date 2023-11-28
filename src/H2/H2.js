import Solicitud from "./solicitud/Solicitud";
import 'bootstrap/dist/css/bootstrap.min.css';


function H2() {
    const data = [{name: 'Diego Debarca', category: 'A'}, {name: 'Gabriel Venegas', category: 'C'}, {name: 'Lionel Messi', category: 'A'}, {name: 'Elon Musk', category: 'S+'},
    {name: 'Dora Exploradora', category: 'C'},{name: 'Pimp flaco', category: 'B'}, {name: 'Pantera Rosa', category: 'S+'}, {name: 'Christian Barrios', category: 'B'}, {name: 'Sofía Rios', category: 'A'}];

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
    }
    return(
        desplegarSolicitudes(data)
    );

};
export default H2;