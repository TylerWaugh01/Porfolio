import { Col, Row, Container } from "reactstrap";


const Introduction = () => {
  return (
    <Container>
      <Row>
        <Col sm={{ size: 'auto', offset: 3 }}>
        </Col>
        <Col style={{display: "flex" , flexDirection: "column",  justifyContent:'center' }}>
          <h1 style={{ fontSize: '70px'}}>Tyler Waugh</h1>
          <h1>Full Stack Developer</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Introduction;
