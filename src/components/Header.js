import { Container, Navbar, NavbarBrand } from 'reactstrap';
import CorgiLogo from '../app/assets/img/logo.png';

const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
        <Container>
            <NavbarBrand href='/'>
                <img src={CorgiLogo} alt='corgi logo' />
            </NavbarBrand>
        </Container>
    </Navbar>
        )
    
    
};

export default Header;
