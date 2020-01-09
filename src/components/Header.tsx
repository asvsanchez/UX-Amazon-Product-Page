import React from 'react';
import logo from '../media/logo.png';
import publi from '../media/publi.jpg';
import '../assets/scss/_header.scss';
import { Navbar, Nav, Form, Button, FormControl, NavDropdown } from 'react-bootstrap';

const Header: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar className="menu-var" variant="dark">
          <img src={logo} className="App-logo" alt="logo" />
          <NavDropdown title="Todos los departamentos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Equipaje</NavDropdown.Item>
            <NavDropdown.Item href="#">Informática</NavDropdown.Item>
            <NavDropdown.Item href="#">Hogar y cocina</NavDropdown.Item>
            <NavDropdown.Item href="#">Ropa y accesorios</NavDropdown.Item>
            <NavDropdown.Item href="#">Videojuegos</NavDropdown.Item>
          </NavDropdown>
          <Form inline className="menu-search">
            <FormControl type="text" className="mr-sm-2" />
          </Form>
          <Form inline>
            <Button variant="outline-light">Buscar</Button>
          </Form>
          <NavDropdown title="Cuenta y listas" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Mi cuenta</NavDropdown.Item>
            <NavDropdown.Item href="#">Mis pedidos</NavDropdown.Item>
            <NavDropdown.Item href="#">Mi lista de deseos</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">Pedidos</Nav.Link>
          <NavDropdown title="Mi Prime" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Prime Video</NavDropdown.Item>
            <NavDropdown.Item href="#">Prime Music</NavDropdown.Item>
            <NavDropdown.Item href="#">Más ventajas</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">Cesta</Nav.Link>
        </Navbar>
        <Navbar className="menu-var" variant="dark">
          <Nav.Link href="#">Elige tu dirección</Nav.Link>
          <Nav.Link href="#" className="a-header a-header-1">Los Más Vendidos</Nav.Link>
          <Nav.Link href="#" className="a-header">Ideas Para Regalos</Nav.Link>
          <Nav.Link href="#" className="a-header">Últimas Novedades</Nav.Link>
          <Nav.Link href="#" className="a-header">Ofertas</Nav.Link>
          <Nav.Link href="#" className="a-header">Outlet</Nav.Link>
          <Nav.Link href="#" className="a-header">AmazonBasics</Nav.Link>
          <Nav.Link href="#" className="a-header">Cheques regalo</Nav.Link>
          <Nav.Link href="#" className="a-header">Atención al Cliente</Nav.Link>
          <Nav.Link href="#" className="a-header a-header-2">Envío Gratis</Nav.Link>
          <img src={publi} className="App-publi" alt="publi" />
        </Navbar>
      </header>
    </div>
  );
}

export default Header;
