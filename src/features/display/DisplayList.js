import { Col, Row } from 'reactstrap';
import DisplayCard from './DisplayCard';
import { selectFeaturedProject } from '../projects/projectsSlice';

const DisplayList = () => {
    const items = [selectFeaturedProject()];

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    <Col sm className='m-1' key={idx}>
                        <DisplayCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default DisplayList;