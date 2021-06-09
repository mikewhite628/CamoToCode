import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import HomeCarousel from './HomeCarousel';
import HomeInfo from './HomeInfo';

function Home() {

  return (
    <Container fluid className='mt-5 no-padding center-content'>
    <HomeCarousel />
    <HomeInfo />
    </Container>
  );
}

export default Home