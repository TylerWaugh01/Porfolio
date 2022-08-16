import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import CorgiLogo from './app/assets/img/logo.png';
import './App.css';

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
            Here comes my porfolio! 
        </div>
    );
}

export default App; 