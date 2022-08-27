import { Col, Container, Row, } from 'reactstrap';
import ProjectCard from "./ProjectCard";
import { selectAllProjects } from './projectsSlice';


const ProjectsList = ({ setProjectId }) => {
    const projects = selectAllProjects();
    return (
    <Container>
    <h2>Projects</h2>
    <Row className="ms-auto">
        {projects.map((project) => {
        return (
        <Col 
        md='5' 
        className='m-4' 
        key={project.id}
        onClick={() => setProjectId(project.id)}
        >
        <ProjectCard project={project} />
        </Col>
        );
        })}
    </Row>
    </Container>
    )
};

export default ProjectsList;