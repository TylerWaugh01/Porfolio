import { useState } from 'react';
import { 
    Navbar, 
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav, 
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';



const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
        return (
        <Navbar staticTop fluid style={{marginBottom: '10px'}}> 
            <NavbarBrand className='ms-5' href='/'>
                <NavLink className='nav-link' to='/'>
                    <h1>Tyler Waugh</h1>                 
                </NavLink>    
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} className='navbar-dark' />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                    <NavHashLink className='nav-link' to='/#home'>  
                            <i className='fa fa-home fa-lg' /> Home
                        </NavHashLink>
                    </NavItem>
                    <NavItem>
                        <NavHashLink className='nav-link' to='/#projects'>  
                            <i className='fa fa-list fa-lg'  /> Work
                        </NavHashLink>
                    </NavItem>
                    <NavItem>
                        <NavHashLink className='nav-link' to='/#contact'>
                            <i className='fa fa-address-card fa-lg' /> Contact
                        </NavHashLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;

