import {Navbar, Nav, Container } from 'react-bootstrap'; 
import {Link} from "react-router-dom"

function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="home">Financiera la clave</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="simulacion">Simulación Préstamo</Nav.Link>
            <Nav.Link href="registroPrestamo">Registrar Préstamo</Nav.Link>
            <Nav.Link href="solicitudes">Solicitudes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default NavBar;