import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel, Button, Col, Jumbotron, Card, Row, Container} from 'react-bootstrap'
import salute from '../../src/images/salute.jpg'
import me from '../../src/images/me.jpg'

function AboutUsGreeting () {
  return (
  <Container fluid style={{paddingLeft:'0', paddingRight:'0'}}>
   <Card style={{color:'#fff'}} className={'text-center mt-5'}>
   <div className={'transparent-cover'}></div>
   <Card.Img src={salute} alt='card image' />
   <Card.ImgOverlay className={'mt-3 ontop-transparent'}>
                <h3>First slide label</h3>
                <p>Premium blah blah blah here about how good we are</p>
    </Card.ImgOverlay>
               
    </Card>
  </Container>

  )
}

export default AboutUsGreeting