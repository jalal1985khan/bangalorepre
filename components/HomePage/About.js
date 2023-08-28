"use client"
import React from "react";
import { Container,Row,Col } from 'react-bootstrap'

const smoothScroll = (element) => {
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};


function About() {

  const handleLinkClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      smoothScroll(section);
    }
  };

  return (
    <>
<Container className="pt-5 pb-5">
        <Row >
          <Col xs={12} lg={2}><a className="btnLink" href="#section1" onClick={(e) => handleLinkClick(e, 'section1')}>About the platform</a></Col>
          <Col xs={12} lg={2}><a className="btnLink" href="#section2" onClick={(e) => handleLinkClick(e, 'section2')}>Images from the field</a></Col>
          <Col xs={12} lg={2}><a className="btnLink" href="#section3" onClick={(e) => handleLinkClick(e, 'section3')}>Our experience last year</a></Col>
          <Col xs={12} lg={2}><a className="btnLink" href="#section4" onClick={(e) => handleLinkClick(e, 'section4')}>Upcoming events</a></Col>
          <Col xs={12} lg={1}><a className="btnLink" href="#section5" onClick={(e) => handleLinkClick(e, 'section5')}>Partners</a></Col>
          <Col xs={12} lg={2}><a className="btnLink" href="#section6" onClick={(e) => handleLinkClick(e, 'section6')}>People behind this project</a></Col>
          <Col xs={12} lg={1}><a className="btnLink" href="#section7" onClick={(e) => handleLinkClick(e, 'section7')}>Contact us</a></Col>
        </Row>        
      </Container>
      
<Container className="d-flex flex-column mt-5 mb-5">
<hr/>
<h2 className="fs-40 blue fw-bold">Precision Pandemic Health Surveillance</h2>
</Container>
<Container className="bg d-flex align-items-center" fluid>
<Container className="bg-white d-flex flex-column justify-content-center" id="section1">
<h3 className="fs-1">About the platform</h3>
<p className="fs-3 light-blue">The Precision Pandemic Health Surveillance (PPHS) system is Asia’s first city-wide mixed source wastewater surveillance for SARS-CoV-2. In Bangalore, the system has been conducting systematic and regular testing of wastewater since April 2021. A total of 45 open canals and 28 sewershed sites are covered at intervals of one - two times a week. This covers almost 70% of the total population of Bangalore. On June 21, 2021, the platform also introduced genome sequencing to determine the prevalent and dominant strains. This effort is possible through strong inter-agency collaboration between BBMP, BWSSB, KUWSDB, Pollution Control board, DoHFW and partners.</p>
</Container>
</Container>
</>
  )
}

export default About
