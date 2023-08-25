"use client"
import React from 'react'
import { Container } from 'react-bootstrap'

var sectionStyle = {
  width: "100%",
  height: "700px",
  backgroundImage: "url('/images/banner.jpeg')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};


function HomeBanner() {
  return (
    <>
      <Container style={ sectionStyle } fluid className="d-flex align-items-center">
        <Container className="d-flex justify-content-center flex-column">
          <h1 className="fs-60 text-white text-center">Precision Health -<br /> Bangalore Response</h1>
          <h3 className="text-white text-center">Precision Pandemic Health Surveillance Initiative in Bangalore City</h3>
          <h3 className="text-white text-center">#COVIDActionCollab Initiative</h3>
        </Container>
    </Container>
    </>
  )
}

export default HomeBanner
