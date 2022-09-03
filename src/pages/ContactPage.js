import { Card, CardBody, CardText, Container, } from "reactstrap";


const ContactPage = () => {
    return (
    <Container>
    <Card
    className="my-2 md-4"
    color="dark"
    inverse

    // style={{ width: "18rem" }}
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

export default ContactPage;




