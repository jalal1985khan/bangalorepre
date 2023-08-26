import React from 'react'
import Header from '@/components/HomePage/Header'
import Banner from '@/components/HomePage/HomeBanner'
import About from '@/components/HomePage/About'
import ImageField from '@/components/HomePage/ImageField'
import Experience from '@/components/HomePage/Our-Exp'
import Pdf from '@/components/HomePage/Pdf'
import Event from '@/components/HomePage/Events'
import Partners from '@/components/HomePage/Partners'
import Peoples from '@/components/HomePage/Peoples'
import Publication from '@/components/HomePage/Publications'
import Contact from '@/components/HomePage/Contact'
import Tableau from '@/components/HomePage/Tableau'
import Footer from '@/components/HomePage/Footer'

function page() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      
    
      <Footer/>
    </>
  )
}

export default page
