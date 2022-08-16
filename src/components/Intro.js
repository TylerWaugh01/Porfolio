import { Col, Row, Container } from "reactstrap";
import Butter from "../app/assets/img/Butter.jpeg";

const Introduction = () => {
  return (
    <Container>
      <Row>
        <Col sm={{ size: 'auto', offset: 3 }}>
          <img src={Butter} alt="Butter" />
        </Col>
        <Col style={{display: "flex" , flexDirection: "column",  justifyContent:'center' }}>
          <h1 style={{ fontSize: '60px'}}>Tyler Waugh</h1>
          <h1>Full Stack Developer</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Introduction;
