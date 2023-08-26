import React from 'react'
import Header from '@/components/HomePage/Header'
import Banner from '@/components/HomePage/HomeBanner'
import About from '@/components/HomePage/About'
import PDFReader from '@/components/HomePage/Pdf'
import Footer from '@/components/HomePage/Footer'

function page() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <PDFReader/>
    
      <Footer/>
    </>
  )
}

export default page
