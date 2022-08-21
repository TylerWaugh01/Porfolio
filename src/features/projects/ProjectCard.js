import { Card, CardImg, CardTitle, CardText } from 'reactstrap';

const ProjectCard = ({ project }) => {
    const { image, name, elevator } = project;
    return (
    <Card>
        <CardTitle>{name}</CardTitle>
        <CardImg width='100%' src={image} alt={name}/> 
        <CardText>{elevator}</CardText>
    </Card>
    )
};

export default ProjectCard;

