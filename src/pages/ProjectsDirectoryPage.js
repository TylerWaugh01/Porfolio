import { Container, Row, Col, Button } from 'reactstrap';
import ProjectDetail from '../features/projects/ProjectDetail';
import ProjectsList from '../features/projects/ProjectsList';
import { selectRandomProject } from '../features/projects/projectsSlice';


const ProjectsDirectoryPage = () => {
    const selectedProject = selectRandomProject();

    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <ProjectsList />
                </Col>
                <Col sm='7' md='5'>
                    <ProjectDetail project={selectedProject} />
                </Col>
            </Row>
        </Container>
    );
};

export default ProjectsDirectoryPage;