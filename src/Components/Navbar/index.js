import React from 'react';
import Logo from '../../Logo/allylogo.svg';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

import { NavbarLink } from './Style';

const NavBar = () => {
    return (
      <div>
           <Navbar color="light" light expand="md">
            <NavbarBrand href="/"><img src={Logo} alt="Logo da Ally" height={50} width={120} /></NavbarBrand>
            <NavbarToggler/>
            <Collapse navbar>
              <Nav className="mr-auto" navbar>
            <NavItem>
              <NavbarLink to="/">Cadastrar curso</NavbarLink>
            </NavItem>
            <NavItem>
               <NavbarLink to="/lista-de-cursos">Listar cursos</NavbarLink>
            </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
      </div>
      );
}

export default NavBar;