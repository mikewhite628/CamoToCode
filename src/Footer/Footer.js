import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Col, Row, Container, ListGroup} from 'react-bootstrap'
import icon from '../../src/images/icon.jpg'


function Footer() {
  return (
    <Container fluid style={{backgroundColor:'#d7d7d7', color:'#fff'}} >
    <Row className='mt-5'>
    </Row>
    <Row className={'mt-3 mb-5'}>
        <Col>
            <Card className={'text-center box-shadow'} style={{color:'#212529'}}>
                <Card.Title>
                    More To Come Soon!
                </Card.Title>
                <Card.Body>
                    Camo To Code is Currently In Develpment! Soon this page will provide access to some of the best FREE learning resources for veterans looking to change careers!
                </Card.Body>
            </Card>
        </Col>

    </Row>
    <Row>
        <Col>&#169;</Col>
    </Row>
   </Container>
  );
}

export default Footer