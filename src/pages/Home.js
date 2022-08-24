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
          <h1 style={{ fontSize: '70px'}}>Tyler Waugh</h1>
          <h1>Full Stack Developer</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Introduction;

import { Card, CardBody, CardText, Col, Row, Container, CardTitle } from "reactstrap";

const SkillCard = () => {
  return (
    <Container>
    <h2>Who is Tyler?</h2>
      <Row>
        <Col>
          <Card
            className="my-2"
            color="primary"
            inverse
            style={{ width: "18rem" }}
          >
            <CardBody>
              <CardTitle tag="h5">Skills</CardTitle>
              <CardText>
                HTML, CSS, Javascript, Bootstrap, React, React Native, NodeJS,
                Express, MongoDB
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card
            className="my-2"
            color="success"
            inverse
            style={{ width: "18rem" }}
          >
            <CardBody>
              <CardTitle tag="h5">Education</CardTitle>
              <CardText>
                Nucamp Full Stack Web + Mobile Development Bootcamp
              </CardText>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card
            className="my-2"
            color="warning"
            inverse
            style={{ width: "18rem" }}
          >
            <CardBody>
              <CardTitle tag="h5">Biography</CardTitle>
              <CardText>
                Kansan living in New Jersey. A web developer with a passion for design, user experience, and bringing people together. 
              </CardText>
            </CardBody>
          </Card>
        </Col>


      </Row>
    </Container>
  );
};

export default SkillCard;
