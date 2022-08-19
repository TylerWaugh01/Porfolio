import { Col, Container, Row, } from 'reactstrap';
import ProjectCard from "./ProjectCard";

const ProjectsList = (props) => {
    return (
    <Container>
    Projects 
    <Row className="ms-auto">
        {props.projects.map((project) => {
        return (
        <Col md='5' className='m-4' key={project.id}>
        <ProjectCard project={project} />
        </Col>
        );
        })}
    </Row>
    </Container>
    )
};

export default ProjectsList;