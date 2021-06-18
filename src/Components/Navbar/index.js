import React, {useState} from 'react';
import Logo from '../../Logo/allylogofim.jpg';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Media
} from 'reactstrap';

import { NavbarLink } from './Style';

const NavBar = () => {
    const [collapsed, setCollapsed] = useState(true);

   const toggleNavbar = () => setCollapsed(!collapsed);
    return (
      <div>
           <Navbar color="white" light expand="md" style={{marginBottom: "0", height:"90px"}}>
            <NavbarBrand href="/"><img src={Logo} alt="Logo da Ally" height={90} width={160}/></NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} />
            <Collapse isOpen={!collapsed} navbar >
              <Nav className="mr-auto" navbar>
            <NavItem style={{margin:"0 10% 0 5%"}}>
            <NavbarLink to="/">
            <Button outline color="primary" style={{width:"120px", height:"58px", marginBottom:"5px"}}>Cadastrar cursos
            </Button>{' '}
            </NavbarLink>
            </NavItem>
            <NavItem style={{margin:"0 10% 0 5%"}}>
            <NavbarLink to="/lista-de-cursos">
            <Button outline color="primary" style={{width:"120px", height: "58px"}}>
               Listar Cursos
             </Button>{' '}
             </NavbarLink>
            </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
      <hr style={{width:"100%", marginTop: "0"}}/>
      </div>
      );
}

export default NavBar;