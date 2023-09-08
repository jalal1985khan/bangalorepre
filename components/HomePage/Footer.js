"use client"
import React from 'react'
import { Container} from 'react-bootstrap'
const year = new Date().getFullYear()
function Footer() {
  return (
    <Container className="footer d-flex justify-content-center align-items-center" fluid>
      <p>© Copyright { year } </p>
    </Container>
  )
}

export default Footer
