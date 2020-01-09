import React from 'react';
import logo from './logo.png';
import './Header.css';
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
          </NavDropdown>
          <Form inline className="menu-search">
            <FormControl type="text" className="mr-sm-2" />
          </Form>
          <Form inline>
            <Button variant="outline-light">Buscar</Button>
          </Form>
          <NavDropdown title="Cuenta y listas" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">1</NavDropdown.Item>
            <NavDropdown.Item href="#">2</NavDropdown.Item>
            <NavDropdown.Item href="#">3</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">Pedidos</Nav.Link>
          <NavDropdown title="Mi Prime" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">1</NavDropdown.Item>
            <NavDropdown.Item href="#">2</NavDropdown.Item>
            <NavDropdown.Item href="#">3</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">Cesta</Nav.Link>
        </Navbar>
      </header>
    </div>
  );
}

export default Header;
