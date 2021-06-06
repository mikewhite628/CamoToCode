import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Container} from 'react-bootstrap'
import salute from '../../src/images/salute.jpg'


function AboutUsGreeting () {
  return (
  <Container fluid style={{paddingLeft:'0', paddingRight:'0'}}>
   <Card>
   <Card.Img src={salute} alt='card image' />           
    </Card>
  </Container>

  )
}

export default AboutUsGreeting