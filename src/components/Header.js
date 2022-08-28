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

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Navbar dark color='dark' sticky='top' expand='md'>
            <NavbarBrand className='ms-5' href='/'>
                <NavLink className='nav-link' to='/'>
                    <h1 className='mt-1'>Tyler Waugh</h1>
                </NavLink>    
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        {/* <NavLink className='nav-link' to='/projects'> */}
                            <Link to='#projects'>
                            <i className='fa fa-list fa-lg'  /> Projects
                            </Link>
                        {/* </NavLink> */}
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                            <i className='fa fa-info fa-lg' /> Bio
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                            <i className='fa fa-address-card fa-lg' /> Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;

