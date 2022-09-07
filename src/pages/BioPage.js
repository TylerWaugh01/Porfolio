import { Card, CardBody, CardText, Container, } from "reactstrap";

const BioPage = () => {
    return (
    <Container>
    <Card
    className="my-2 biocard"
    color="dark"
    inverse
    >
    <CardBody>
      <CardText className='d-flex justify-content-center'>
        Tyler is a Kansan living in New Jersey. He is a web developer with a passion for design, user experience, and bringing people together.  
      </CardText>
    </CardBody>
  </Card>  
</Container>
)
};

export default BioPage;