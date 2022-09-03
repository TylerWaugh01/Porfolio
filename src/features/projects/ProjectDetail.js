import { Card, CardImg, CardText, CardBody, Col, Container, Row, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProjectDetail = ( {project} ) => {
    const { image, name, description, website } = project;

    return (
                <Container>
                    <Row>
                        <Col md='6'>
                        <a href={website} target="_blank" rel="noreferrer">
                                <Card>
                                    <CardImg top src={image} alt={name} />
                                </Card>
                                </a>                           
                        </Col>
                        <Col md='6'>
                            <Card>
                                <CardTitle>{name}</CardTitle>
                                    <CardBody>
                                            <CardText>{description}</CardText>
                                    </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>    
            );
};

export default ProjectDetail; 
