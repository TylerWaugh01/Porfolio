import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectProjectById } from '../features/projects/projectsSlice';
import ProjectDetail from '../features/projects/ProjectDetail';

const ProjectDetailPage = () => {
    const { projectId } = useParams();
    const project = selectProjectById(projectId);

    return (
        <Container>
            <Row my='5'>
                <ProjectDetail project={project} />
            </Row>
        </Container>
    );
};

export default ProjectDetailPage;