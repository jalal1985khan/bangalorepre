"use client"
import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image'
function Partners() {
  return (
<>
<Container fluid className="g-0 pt-5 pb-5" id="section5">
<Container><h2 className="fs-40 blue fw-bold">Partners</h2></Container>
<Container fluid>
<Image src="/images/partners.png" width={600} height={300} className="img-100" />
</Container>
</Container>
    </>
  )
}

export default Partners