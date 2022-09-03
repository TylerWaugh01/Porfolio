import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col xs={{ size: 4, offset: 1 }} sm='2'>
                        <h5 style={{color:'white'}}>Links</h5>
                        <ul className='list-unstyled'>
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
                    <Col sm='4' className='text-center'>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+12065551234'
                        >
                            <i className='fa fa-phone' /> (785) 224-6976
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:tyler.waugh@gmail.com'
                        >
                            <i className='fa fa-envelope-o' /> waughphoto@gmail.com
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;