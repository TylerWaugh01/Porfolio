import { useState } from 'react';
import { 
    Navbar, 
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav, 
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
// import CorgiLogo from '../app/assets/img/logo.png';
import { HashLink as Link } from 'react-router-hash-link';
import { NavHashLink } from 'react-router-hash-link';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Navbar dark color='dark' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <NavLink className='nav-link' to='/'>
                    <h3 className='mt-1'>Tyler Waugh</h3>
                </NavLink>    
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                    <NavHashLink className='nav-link' to='/#home'>  
                            <i className='fa fa-home fa-lg' /> Home
                        </NavHashLink>
                    </NavItem>
                    <NavItem>
                        <NavHashLink className='nav-link' to='/#projects'>  
                            <i className='fa fa-list fa-lg'  /> Projects
                        </NavHashLink>
                    </NavItem>
                    <NavItem>
                        <NavHashLink className='nav-link' to='/#bio'>
                            <i className='fa fa-info fa-lg' /> Bio
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

