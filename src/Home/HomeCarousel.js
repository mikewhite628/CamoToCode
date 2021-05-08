import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel, Button, Col, Card} from 'react-bootstrap'
import logo1 from '../../src/images/logo1.svg'

function HomeCarousel () {
  return (
    <Card style={{color:'#fff'}} className={'text-center'}>
   <div className={'transparent-cover'}></div>
   <Card.Img src={logo1} alt='card image'/>
   <Card.ImgOverlay className={'mt-3 ontop-transparent'}>
                <h3>First slide label</h3>
                <p>Premium blah blah blah here about how good we are</p>
    </Card.ImgOverlay>
               
    </Card>
    
    
  );
}

export default HomeCarousel