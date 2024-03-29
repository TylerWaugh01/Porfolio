import { Card, CardImg, CardText, CardBody, Col, Container, Row, CardTitle } from 'reactstrap';

const ProjectDetail = ( {project} ) => {
    const { image, name, skills, website, elevator} = project;

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
                        <Col md='6' style={{display: "flex" , flexDirection: "column",  justifyContent:'center'}}>
                            <Card style={{display: "flex" , flexDirection: "column",  justifyContent:'center'}}>
                                <CardTitle style={{display: "flex" , flexDirection: "row",  justifyContent:'center'}}>{name}</CardTitle>
                                    <CardBody>
                                            <CardText>
                                                <ul>
                                                    <li>
                                                    <a href={website} target="_blank" rel="noreferrer" style={{ textDecoration: 'none'}}>
                                                    {elevator}
                                                </a>
                                                    </li>
                                                <li>
                                                {skills}
                                                    </li>
                                                </ul> 
                                            </CardText>
                                    </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>    
            );
};

export default ProjectDetail; 
