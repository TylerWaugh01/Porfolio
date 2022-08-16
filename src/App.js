import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import CorgiLogo from './app/assets/img/logo.png';
import './App.css';
import Introduction from './components/Intro';

function App() {
    return (
        <div className='App'>
            <Navbar dark color='primary' sticky='top' expand='md'>
                <Container>
                    <NavbarBrand href='/'>
                        <img src={CorgiLogo} alt='corgi logo' />
                    </NavbarBrand>
                </Container>
            </Navbar>
            <Introduction />
        </div>
    );
}

export default App; 