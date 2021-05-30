import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Col, Row, ListGroup, Container, ListGroupItem} from 'react-bootstrap'
import study1 from '../images/study.jpg'


function HomeInfo() {
  return (
    <Container fluid >
    <Row className={'mb-3 mt-3'}>
    <Col sm={6}>
   <Card border='0'>
       <Card.Title style={{fontSize:'30px', textAlign:'center', fontFamily:'Antonio'}}> Are you a veteran considering a career in tech?</Card.Title>
       <Card.Body>
       We offer free resources for you to learn and self educate the essentials for a sucessfull transition to a career in tech.
       There's an ocean of information out there when you choose the self taught path. Thats why we're here. We
       want to cut through the fluff and get you right back into the fight with the tools you need to accomplish your mission.
       </Card.Body>
       <ListGroup className='list-group-flush'>
         <ListGroupItem className='mt-3'> I want to learn how to code. What next?</ListGroupItem>
         <ListGroupItem className='mt-3'> How Do I choose a language? </ListGroupItem>
         <ListGroupItem className='mt-3'> I know what language I want to learn, Where do I go to learn it? </ListGroupItem>
         <ListGroupItem className='mt-3'> How can improve the self  education process? </ListGroupItem>
       </ListGroup>
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