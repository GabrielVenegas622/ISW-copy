import {Navbar, Nav, Container, Button } from 'react-bootstrap'; 
import { useNavigate} from "react-router-dom"

function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
    window.location.reload();
  }
  return (
    <Navbar data-bs-theme="dark" style={{ backgroundColor: '#3bb19b' }}>
        <Container>
          <Navbar.Brand href="home">Financiera la clave</Navbar.Brand>
          <Nav className="me-auto"> 
            <Nav.Link href="simulacion">Simulación Préstamo</Nav.Link>
            <Nav.Link href="registroPrestamo">Registrar Préstamo</Nav.Link>

          </Nav>
          <Button variant= "outline-light" onClick= {handleLogout}>
            Logout
          </Button>
        </Container>
      </Navbar>
  );
}

export default NavBar;