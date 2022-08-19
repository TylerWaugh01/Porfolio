import { Card, CardImg, CardTitle, CardText } from 'reactstrap';

const ProjectCard = (props) => {
    return (
    <Card>
        <CardTitle>{props.project.name}</CardTitle>
        <CardImg width='100%' src={props.project.image} alt={props.project.name}/> 
        <CardText>{props.project.elevator}</CardText>
    </Card>
    )
};

export default ProjectCard;