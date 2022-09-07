import { Container, Row, Col } from 'reactstrap';
import { NavHashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 5 }} sm='2' style={{ display: "flex" , flexDirection: "column",  justifyContent:'center' }}>
                        <h5 style={{color:'white'}}>Links</h5>
                        <ul className='list-unstyled' >
                            <li>
                                <NavHashLink  to='/#home'>Home</NavHashLink>
                            </li>
                            <li>
                                <NavHashLink to='/#projects'>Projects</NavHashLink>
                            </li>
                            <li>
                                <NavHashLink to='/#contact'>Contact</NavHashLink>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;