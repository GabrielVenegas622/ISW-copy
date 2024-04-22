import {Navbar, Nav, Container, Button } from 'react-bootstrap'; 
import { useNavigate} from "react-router-dom"

function NavBarComercial() {
  const navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("nombre")
    localStorage.removeItem("apellido")
    navigate("/");
    window.location.reload();
  }
  return (
    <Navbar data-bs-theme="dark" style={{ backgroundColor: '#3bb19b' }}>
        <Container>
          <Navbar.Brand href="home">Financiera la clave</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="solicitudes">Solicitudes</Nav.Link>
          </Nav>
          <Button variant= "outline-light" onClick= {handleLogout}>
            Logout
          </Button>
        </Container>
      </Navbar>
  );
}

export default NavBarComercial;