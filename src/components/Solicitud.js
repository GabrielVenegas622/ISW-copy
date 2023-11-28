import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import '../css/solicitud.css'
import { useForm } from 'react-hook-form';

function GridComplexExample() {
  const {register, handleSubmit, formState: {errors}} = useForm();
    
  return (
    <Container className='styledContainer'>
      <Form>
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
          <Form.Select defaultValue="Choose...">
            <option>Selecciona</option>
            <option>S</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
          </Form.Select>
          </Form.Group>
        </Row>
          <Form.Label>Comentarios del Analista</Form.Label>
          <FloatingLabel controlId="floatingTextarea2" label="Comentario">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '100px' }}
            />
          </FloatingLabel>

        <Button variant="primary" type="submit" style={{ marginTop: '20px', marginBottom: '20px' }}>
          Generar solicitud
        </Button>
      </Form>
    </Container>
  );
}

export default GridComplexExample;