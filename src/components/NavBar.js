import {Navbar, Nav, Container, Button } from 'react-bootstrap'; 
import {Link} from "react-router-dom"

function NavBar() {
  const handleLogout = () =>{
    localStorage.removeItem("token");
    window.location.reload();
  }
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="home">Financiera la clave</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="simulacion">Simulación Préstamo</Nav.Link>
            <Nav.Link href="registroPrestamo">Registrar Préstamo</Nav.Link>
            <Nav.Link href="solicitudes">Solicitudes</Nav.Link>

          </Nav>
          <Button variant= "outline-light" onClick= {handleLogout}>
            Logout
          </Button>
        </Container>
      </Navbar>
  );
}

export default NavBar;