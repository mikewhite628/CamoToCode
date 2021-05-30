import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel, Button, Col, Container,} from 'react-bootstrap'
import HomeCarousel from './HomeCarousel';
import HomeInfo from './HomeInfo';

function Home() {

  return (
    <Container fluid className='mt-5' style={{paddingLeft:'0', paddingRight:'0'}}>
    <HomeCarousel />
    <HomeInfo />
    </Container>
  );
}

export default Home