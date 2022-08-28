import { Card, CardImg, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const { id, image, name, elevator } = project;
    return (
    <Link to={`${id}`}>
        <Card>
            <CardTitle>{name}</CardTitle>
            <CardImg width='100%' src={image} alt={name}/> 
            <CardText>{elevator}</CardText>
        </Card>
    </Link>
    )
};

export default ProjectCard;

