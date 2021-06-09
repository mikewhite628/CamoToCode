import React from 'react'
import {Image, Row, Col} from 'react-bootstrap'
import logo1 from '../../src/images/ctc-words.svg'

function HomeCarousel () {
  return (
    <div className='creame-background'>
      <Row fluid>
        <Col>       
          <Image src={logo1} className='welcome-image' fluid alt='card image'/>        
        </Col>    
      </Row>
    </div>
    
    
  );
}

export default HomeCarousel