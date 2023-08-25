"use client"
import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
function Header() {
  return (
    <Container>
<nav class="navbar bg-body-tertiary">
<div class="container">
    <Link class="navbar-brand" href="/">
      <Image src="/images/logo.png" alt="Bangalore Precision" width="350" height="70"/>
    </Link>
</div>
</nav>    

    </Container>
  )
}

export default Header
