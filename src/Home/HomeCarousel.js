import React, { useState, useEffect } from 'react'
import { Carousel, Button, Col, Image} from 'react-bootstrap'
import logo1 from '../../src/images/ctc-words.svg'

function HomeCarousel () {
  return (
    <div className='creame-background no-padding'>
      <Image src={logo1} className='fullscreen' alt='card image'/>
    </div>
    
    
  );
}

export default HomeCarousel