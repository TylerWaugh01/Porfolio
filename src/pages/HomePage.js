import Tyler from "../app/assets/img/Tyler.png"
import { Card, CardBody, CardText, Col, Row, Container } from "reactstrap";
import { useState } from 'react';
import ProjectDetail from '../features/projects/ProjectDetail';
import ProjectsList from '../features/projects/ProjectsList';
import { selectProjectById } from '../features/projects/projectsSlice';
import DisplayList from '../features/display/DisplayList';
import ContactPage from "./ContactPage";
import BioPage from "./BioPage";


const HomePage = () => {
  const [projectId, setProjectId] = useState(0);   
  const selectedProject = selectProjectById(projectId); 
  return (
    <Container>
      <Row>
        <Col sm={{ size: 'auto'}}>
          <img src={Tyler} alt="Tyler" />
        </Col>
        <Col style={{display: "flex" , flexDirection: "column",  justifyContent:'center' }}>
          <h2  id='home' style={{ fontSize: '70px', }}>Tyler Waugh,</h2>
          <h2 style={{ fontSize: '50px', }}>Full Stack Developer</h2>
            <p className="my-2"><b>Skills:</b>
                HTML, CSS, Javascript, Bootstrap, React, React Native, NodeJS,
                Express, MongoDB</p>
            <p className="my-1"><b>Education:</b>
            Nucamp Full Stack Web + Mobile Development Bootcamp</p>
            <a
                            className='btn btn-social-icon btn-lg btn-github my-2'
                            href='https://github.com/TylerWaugh01'
                        >
                            <i className='fa fa-github fa-5x' /> 
                        </a>
        </Col>
      </Row>
       <Row>
        <h3 id='projects'>Projects</h3>
                <Col>
                    <ProjectsList/>
                </Col>
            </Row>
       <Row>
        <h3 id='bio'>Bio</h3>
                <Col>
                    <BioPage/>
                </Col>
            </Row>  

            <Row>
        <h3 id='contact'>Contact</h3>
                <Col>
                    <ContactPage/>
                </Col>
            </Row>  
    </Container>
  );
};

export default HomePage;



