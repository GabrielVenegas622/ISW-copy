import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import '../css/solicitud.css'
import { useForm } from 'react-hook-form';
import { agregarSolicitud } from '../Api/solicitudesFront';
import { useState, useEffect} from 'react';
import { fetchUFValue, fetchAgents } from '../Api/solicitudesFront';


function GridComplexExample() {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const [errorMessage, setErrorMessage] = useState('');
  const [correctMessage, setcorrectMessage] = useState('');
  const nombre = localStorage.getItem("nombre")
  const apellido = localStorage.getItem("apellido")

  
  const onSubmit = handleSubmit( async (values) =>{
    console.log("Apretaste el boton");
    try {
      const UF = await fetchUFValue();
      const valorCredito = values.Monto;
      const tasaMensual = values.Tasa;
      const plazo = values.Plazo;
      let cuota = (valorCredito) / ((1-((1+tasaMensual/100)**(-plazo)))/(tasaMensual/100))
      cuota = cuota.toFixed(2);
      values.ValorCreditoUF = cuota;

      const valorCLP = Math.round(cuota * UF);

      values.ValorCreditoCLP = valorCLP;
      values.nombreAgente = nombre;
      values.apellidoAgente = apellido;
      console.log(values)
      await agregarSolicitud(values);

      setErrorMessage('');
      setcorrectMessage('Solicitud agregada exitosamente')
    } catch (error) {
      setcorrectMessage('');
      setErrorMessage(error.response.data.message);
    }
  })

  const obtenerData = async() => {
    try{
      const users = await fetchAgents();
      return users;

    } catch (error) {
      console.log('error al obtener los usuarios', error)
      return error
    }
  }

  // const data = obtenerData().then(data =>{
  //   try {
  //     console.log("aa",data)
  //   } catch (error) {
  //     console.error("errorrr", error)
  //   }
  // })

  const [data, setData] = useState(null);

  useEffect(() => {
    obtenerData().then(data => {
      setData(data);
    }).catch(error => {
      console.error("Error al obtener los datos:", error);
      setData([]); // Si ocurre un error, establece data como un array vacío
    });
  }, []);




    
  
  console.log("aaaaa",data)
  // function desplegarOpciones() {
    
  //   let content
  //   const opciones = obtenerData().then(users => {
  //     const userNames = users.map((user, index) => (
  //       <div key={index}>miau miau wof</div>
  //     ));
  //     //console.log("aaaaaa",userNames)
  //     return userNames;
  //   }).catch(error => {
  //     content = <p>No existen agentes para derivar.</p>;
  //     console.error("Error al obtener usuarios:", error);
  //   });

  //   return opciones;
  // }

  // const agentesComerciales = desplegarOpciones()
  // console.log("Agentes comerciales",agentesComerciales)

  return (
    <Container className='styledContainer'>
      <Form onSubmit={onSubmit}>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        {correctMessage && <p style={{ color: 'green' }}>{correctMessage}</p>}
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control {...register('nombre')}type="text" placeholder="Nombre" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Apellido</Form.Label>
            <Form.Control {...register('apellido')} type="text" placeholder="Apellido" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>RUT</Form.Label>
            <Form.Control {...register('RUT')} type="text" placeholder="" />
          </Form.Group>
          
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label >Ciudad</Form.Label>
            <Form.Control {...register('Ciudad')} type = 'text' placeholder="Ciudad" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Comuna</Form.Label>
            <Form.Control {...register('Comuna')} placeholder="Comuna" type = 'text'></Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Número telefonico</Form.Label>
            <Form.Control {...register('NumeroTel')} type="text" placeholder="Teléfono" />
          </Form.Group>
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Calle</Form.Label>
            <Form.Control {...register('Calle')} type="text" placeholder="Calle" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Número</Form.Label>
            <Form.Control {...register('NumeroCasa')} type="text" placeholder="Número de casa" />
          </Form.Group>
        </Row>
        
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Monto en UF</Form.Label>
            <Form.Control {...register('Monto')} type='number'/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Tasa Mensual</Form.Label>
            <Form.Control {...register('Tasa')} type='number' ></Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Plazo</Form.Label>
            <Form.Control {...register('Plazo')} type='number'></Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Categoría Cliente</Form.Label>
          <Form.Select {...register('Categoria')} defaultValue="Choose...">
            <option>Selecciona</option>
            <option>S</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
          </Form.Select>
          </Form.Group>
        </Row>

        <Row>
          <div class="col">
            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Ejecutivo a cargo</Form.Label>
              <Form.Select {...register('agenteComercial')} defaultValue="Choose...">
                <option>Selecciona</option>
                {Array.isArray(data) ?
                  data.map((user, index) => (
                    <option key={index}>{user.firstName+ " "+ user.lastName}</option>
                )):
                  <option> No se encontraron datos</option>}

              </Form.Select>
            </Form.Group>
          </div>
          <div class="col">
            <Button type="submit" style={{ marginTop: '20px', marginBottom: '20px' }}>
              Generar solicitud
            </Button>
          </div>
        </Row>
        
      </Form>
    </Container>
  );
}

export default GridComplexExample;