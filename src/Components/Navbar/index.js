import React from 'react';

import { Container, NavbarLink } from './Style';

const Navbar = () => {
    return (
        <Container>
          <NavbarLink to="/">Cadastrar curso</NavbarLink>
          <NavbarLink to="/lista-de-cursos">Listar cursos</NavbarLink>
        </Container>
      );
}

export default Navbar;