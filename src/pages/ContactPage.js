import { Card, CardBody, CardText, Container, Row, Col } from "reactstrap";


const ContactPage = () => {
    return (
    <Container>
        <Row>
    <Col>
      <Card
    className="my-2"
    color="dark"
    inverse
    // style={{ width: "18rem" }}
  >
    <CardBody>
      <CardText className='d-flex justify-content-center'>
      <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+12065551234'
                        >
                            <i className='fa fa-phone' /> (785) 224-6976
                        </a>
      </CardText>
    </CardBody>
  </Card>  
      </Col>
      <Col>
      <Card
    className="my-2"
    color="dark"
    inverse
    // style={{ width: "18rem" }}
  >
    <CardBody>
      <CardText className='d-flex justify-content-center'>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:tyler.waugh@gmail.com'
                        >
                            <i className='fa fa-envelope-o' /> waughphoto@gmail.com
                        </a>
      </CardText>
    </CardBody>
  </Card>  
      </Col>
    </Row> 
</Container>
    
    
    
  ) 
};

export default ContactPage;




