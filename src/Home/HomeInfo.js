import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Col, Row, ListGroup, Container} from 'react-bootstrap'
import study1 from '../images/study.jpg'
import me from '../../src/images/me.jpg'

function HomeInfo() {
  return (
    <Container fluid >
    <Row className={'mb-3 mt-3'}>
    <Col sm={6}>
   <Card border='0'>
       <Card.Title style={{fontSize:'30px', textAlign:'center', fontFamily:'Antonio'}}> What is Lorem Ipsum?</Card.Title>
       <Card.Body>
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
       when an unknown printer took a galley of type and scrambled it to make a type 
       specimen book.
       </Card.Body>
   </Card>
   </Col>

    <Col sm={6} >
   <Card>
       <Card.Img src={study1} className={'box-shadow'}/>
   </Card>
   </Col>
   </Row>

 
   </Container>
  );
}

export default HomeInfo