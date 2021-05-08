import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel, Button, Col, Jumbotron, Card, Row, Container} from 'react-bootstrap'
import me from '../../src/images/me.jpg'
import office from '../../src/images/office.jpg'

function AboutUsInfo () {
  return (
  <Container fluid >
    <Row className={'mb-3 mt-3'}>
      <Col xs={12}>
      <Card border='0'>
       <Card.Title style={{fontSize:'45px', textAlign:'center', fontFamily:'Antonio'}}> What is Lorem Ipsum?</Card.Title>
       <Card.Body>
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
       when an unknown printer took a galley of type and scrambled it to make a type 
       specimen book.
       </Card.Body>
   </Card>
      </Col>
    </Row>
    <div style={{fontSize:'45px', textAlign:'center', fontFamily:'Antonio'}}>Veteran Owned And Operated</div>
    <Row className={'mb-3 mt-3'}>
      <Col xs={8}>
      <Card border='0'>
       <Card.Body>
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
       when an unknown printer took a galley of type and scrambled it to make a type 
       specimen book.
       </Card.Body>
   </Card>
      </Col>
      <Col xs={4}>
      <Card>
       <Card.Img src={me}className={'box-shadow'} />
   </Card>
      </Col>
    </Row>
    <div style={{fontSize:'45px', textAlign:'center', fontFamily:'Antonio'}}>Our Mission</div>
    <Row className={'mb-3 mt-3'}>
      <Col xs={7}>
      <Card border='0'>
       <Card.Body>
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
       when an unknown printer took a galley of type and scrambled it to make a type 
       specimen book.
       </Card.Body>
   </Card>
      </Col>
      <Col xs={5}>
      <Card>
       <Card.Img src={office} className={'box-shadow'} />
   </Card>
      </Col>
    </Row>
    <div style={{fontSize:'45px', textAlign:'center', fontFamily:'Antonio'}}>More To Come Soon!</div>
  </Container>

  )
}

export default AboutUsInfo