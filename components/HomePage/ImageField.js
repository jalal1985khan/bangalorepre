"use client"
import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image'

function ImageField() {
  return (
    <>
      <Container fluid className="g-0 pt-5 pb-5">
<Container><h2 className="fs-40 blue fw-bold">Images from the field</h2></Container>
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <Image width={300} height={300} src="/images/carousel_1.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <Image width={300} height={300} src="/images/carousel_2.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <Image width={300} height={300} src="/images/carousel_3.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

      </Container>
    </>
  )
}

export default ImageField
