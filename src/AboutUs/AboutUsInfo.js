import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel, Button, Col, Jumbotron, Card, Row, Container, ListGroup, ListGroupItem} from 'react-bootstrap'
import me from '../../src/images/me.jpg'
import office from '../../src/images/office.jpg'

function AboutUsInfo () {
  return (
  <Container fluid >
    <Row className={'mb-3 mt-3'}>
      <Col xs={12}>
      <Card border='0'>
       <Card.Title style={{fontSize:'45px', textAlign:'center', fontFamily:'Antonio'}}> What is Camo To Code? </Card.Title>
       <Card.Body>
       Camo To Code provides access to the best FREE resources avaliable on the internet for anyone looking to teach themselves the web development and coding essentials. 
       </Card.Body>
       <Card.Body>
         Why would someone be interested in pursuin the self taught route with something as complex as coding?
       </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroupItem className='mt-3'> You are free to learn at your own pace! </ListGroupItem>
        <ListGroupItem className='mt-3'> You can stay DEBT FREE by not attending Bootcamps and Traditional 4 year colleges </ListGroupItem>
        <ListGroupItem className='mt-3'> You avoid the for profit education trap and can save your GI Bill for the education you know will benefit you!</ListGroupItem>
        
      </ListGroup> 
   </Card>
      </Col>
    </Row>
    <div style={{fontSize:'45px', textAlign:'center', fontFamily:'Antonio'}}>Veteran Owned And Operated</div>
    <Row className={'mb-3 mt-3'}>
      <Col sm={12} md={6}>
      <Card border='0'>
       <Card.Body>
       I'm Michael White, the Founder of Camo To Code. I served 4 years in the United States Marine Corps as a Supply Admin. and Logistics Clerk with a tour
       in the desert paradise known as Afghnistan in 2010.
       </Card.Body>
       <Card.Body>
         I attained My Bachelors Degree in Business Administration in 2016 and found myself doing the same work I was doing in Marine Corps, just with better pay and bonuses. 
         There was no passion, no growth, just work. I stumbled accross coding and web development in October of 2020 and knew that this was what I wanted to do. I had already used 
         my GI bill and was working a full time job so the self taught route was the only way I could go. 
       </Card.Body>
       <Card.Body>
         I want to help any of my fellow brothers and isters in arms that are trying to make the same leap. I want
         to provide you with the framework needed to make the transition to a career in thech.   
       </Card.Body>
   </Card>
      </Col>
      <Col sm={12} md={6}>
      <Card>
       <Card.Img src={me}className={'box-shadow'} />
   </Card>
      </Col>
    </Row>
    <div>YOU HAVE the self discipline required to get this done!</div>
    <div style={{fontSize:'45px', textAlign:'center', fontFamily:'Antonio'}}>Our Mission</div>
    <Row className={'mb-3 mt-3'}>
      <Col sm={12} md={6}>
      <Card border='0'>
       <Card.Body>
       Our mission is to help every Veteran we possibly can successfully make the career jump into the world of tech
       in the most cost effective manner possible! 
       </Card.Body>
       <Card.Body>
       We fought side by side in the sandbox, now its time to stand shoulder to shoulder back home
       and make sure we all succeed!
       </Card.Body>
   </Card>
      </Col>
      <Col sm={12} md={6}>
      <Card>
       <Card.Img src={office} className={'box-shadow'} />
   </Card>
      </Col>
    </Row>
  </Container>

  )
}

export default AboutUsInfo