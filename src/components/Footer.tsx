import React from 'react';
import logo from '../media/logo.png';
import '../assets/scss/_footer.scss';
import { Navbar, Nav } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <div className="App">
      <footer className="App-footer">
        <Navbar className="menu-var" variant="dark">
          <img src={logo} className="App-logo logo-footer" alt="logo" />
        </Navbar>
        <Navbar className="menu-var link-countries" variant="dark">
          <Nav.Link href="#" className="a-footer">Australia</Nav.Link>
          <Nav.Link href="#" className="a-footer">Alemania</Nav.Link>
          <Nav.Link href="#" className="a-footer">Brasil</Nav.Link>
          <Nav.Link href="#" className="a-footer">Canadá</Nav.Link>
          <Nav.Link href="#" className="a-footer">China</Nav.Link>
          <Nav.Link href="#" className="a-footer">Estados Unidos</Nav.Link>
          <Nav.Link href="#" className="a-footer">Francia</Nav.Link>
          <Nav.Link href="#" className="a-footer">India</Nav.Link>
          <Nav.Link href="#" className="a-footer">Italia</Nav.Link>
          <Nav.Link href="#" className="a-footer">Japón</Nav.Link>
          <Nav.Link href="#" className="a-footer">México</Nav.Link>
          <Nav.Link href="#" className="a-footer">Países Bajos</Nav.Link>
          <Nav.Link href="#" className="a-footer">Emiratos Árabes</Nav.Link>
          <Nav.Link href="#" className="a-footer">Reino Unido</Nav.Link>
          <Nav.Link href="#" className="a-footer">Singapur</Nav.Link>
          <Nav.Link href="#" className="a-footer">Turquía</Nav.Link>
        </Navbar>
      </footer>
    </div>
  );
}

export default Footer;
