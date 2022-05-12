import { Container, Nav, Navbar } from "react-bootstrap";
import './Navbar.css';
import logo from '../logo-tokrum.png';

const NavbarHead =()=>{
  return(
<div className="navbarrr navs sticky-top">
<Navbar className="navs sticky-top shadow ">
    <Container>
    <div className="naiv1 container d-flex">
    <img className="logobranding" src={logo}/>
    <div className="container">
    <Nav className="me-auto naiv justify-content-end">
      <Nav.Link className="txt me-3" style={{color: "#6D6D6D"}} href="#home">Beranda</Nav.Link>
      <Nav.Link className="txt me-3" style={{color: "#6D6D6D"}} href="#features">Karir</Nav.Link>
      <Nav.Link className="txt me-3" style={{color: "#6D6D6D"}}  href="#pricing">Bantuan</Nav.Link>
      <Nav.Link className="txt me-3" style={{color: "#6D6D6D"}} href="#pricing">Blog</Nav.Link>
      <Nav.Link className="txt" style={{color: "#6D6D6D"}} href="#pricing">Hubungi Kami</Nav.Link>
    </Nav>
    </div>
      </div>
    </Container>
  </Navbar>

</div>

  );
}
export default NavbarHead;