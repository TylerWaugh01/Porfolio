import Tyler from "../app/assets/img/Tyler.png"
import Butter from "../app/assets/img/Butter.jpeg";
import { Card, CardBody, CardText, Col, Row, Container, CardTitle } from "reactstrap";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col sm={{ size: 'auto', offset: 3 }}>
          <img src={Tyler} alt="Tyler" />
        </Col>
        <Col style={{display: "flex" , flexDirection: "column",  justifyContent:'center' }}>
          <h2 style={{ fontSize: '70px', }}> Tyler Waugh</h2>
          <h2>  Full Stack Developer</h2>
        </Col>
      </Row>
        <Col>
      <Card
            className="my-2"
            color="dark"
            inverse
            // style={{ width: "18rem" }}
          >
            <CardBody>
              <CardTitle tag="h5">Skills</CardTitle>
              <CardText>
                HTML, CSS, Javascript, Bootstrap, React, React Native, NodeJS,
                Express, MongoDB
              </CardText>
              <CardTitle tag="h5">Education</CardTitle>
              <CardText>
                Nucamp Full Stack Web + Mobile Development Bootcamp
              </CardText>
              <CardTitle tag="h5">Biography</CardTitle>
              <CardText>
                Kansan living in New Jersey. A web developer with a passion for design, user experience, and bringing people together. 
              </CardText>
            </CardBody>
          </Card>
        </Col>
      
      {/* <h2>Who is Tyler?</h2>
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
      </Row> */}
    </Container>
  );
};

export default Home;



