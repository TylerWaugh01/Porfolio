import { Card, CardImgOverlay, CardImg, CardTitle } from 'reactstrap';

const ProjectCard = (props) => {
    return (
    <Card>
        <CardImg width='100%' src={props.project.image} alt={props.project.name}/> 
        <CardImgOverlay>
        <CardTitle>{props.project.name}</CardTitle>
        </CardImgOverlay>
    </Card>
    )
};

export default ProjectCard;