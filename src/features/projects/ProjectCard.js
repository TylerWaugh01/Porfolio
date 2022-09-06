import { Card, CardImg, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const { id, image, name } = project;
    return (
    <Link to={`${id}`}  style={{ textDecoration: 'none', color: 'black'}}>
        <Card className='my-6'>
           <CardTitle style={{display: "flex" , flexDirection: "row",  justifyContent:'center'}}>{name}</CardTitle>
            <CardImg  src={image} alt={name}/> 
            {/* <CardText>{elevator}</CardText> */}
        </Card>
    </Link>
    )
};

export default ProjectCard;

