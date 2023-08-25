"use client"
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import TableauDashboard from '@/components/HomePage/Tableau'
import Link from 'next/link'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
const tableauDashboardUrl = 'https://public.tableau.com/views/PrecisionPandemic-Dashboard/Dashboard-External';  



function Contact() {
  
  return (
    <>
      

      <Container>
        <Row className="d-flex flex-row">
          <Col>

<TwitterTimelineEmbed
  sourceType="profile"
  screenName="Precisi0nHealth"
  options={{height: 400}}
  
/>

</Col>
          <Col>
          <a href="https://twitter.com/Precisi0nHealth" className="btn btn-primary">Follow us on Twitter</a>
          </Col>

</Row>
<Row>
<Col lg={12}>
<TableauDashboard dashboardUrl={tableauDashboardUrl} />
</Col>
</Row>
       
      </Container>
<Container fluid className="bgcolor">
        <p>This initiative is possible with the urgent attention and kind contribution of the SKOLL Foundation.</p>
        <p>This initiative is piloted, incubated, and promoted by Swasti and Catalyst Management Services as part of the #COVIDActionCollab supported by the United States Agency for International Development (USAID) and the Skoll Foundation.</p>
        <p> Disclaimer: This story map is made possible by the support of the American People through the United States Agency for International Development (USAID). The #COVIDActionCollab partnership is supported by USAID/India Health Office, under Cooperative Agreement # 72038620C00001 with Catalyst Management Services. The information provided on this story map is not official U.S. Government information and does not necessarily represent the views or positions of USAID, the United States Government, or Catalyst Management Services.</p>
</Container>
    </>
  )
}

export default Contact