import React from 'react';
import logo from './logo.png';
import './App.css';
import { Navbar, Nav, Form, Button, FormControl, NavDropdown } from 'react-bootstrap';

const App: React.FC = () => {
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

export default App;
