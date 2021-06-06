import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Col,Card, Row, Container, Accordion} from 'react-bootstrap'
import me from '../../src/images/me.jpg'
import office from '../../src/images/office.jpg'

function AboutUsInfo () {
  return (
  <Container fluid >
    <Row className={'mb-3 mt-3'}>
      <Col xs={12}>
      <Accordion defaultActiveKey='0'>
      <Card border='0'>
       <Card.Title className='centered-title'> What is Camo To Code? </Card.Title>
       <Card.Body>
       Camo To Code provides access to the best FREE resources avaliable on the internet for anyone looking to teach themselves the web development and coding essentials. 
       </Card.Body>
       <Card.Body>
         Why would someone be interested in pursuing the self taught route with something as complex as coding?
       </Card.Body>
      </Card>
      <Card>
       <Card.Header>
        <Accordion.Toggle as={Button} className='no-underline black-font' variant="link" eventKey="0">
          You are free to learn at your own pace!
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
         <Card.Body className='mt-3'>
           <ul className='bullet-list'>
             <li className='bullet'>One of the main reasons people pursure the self taught route is the flexibile schedule</li>
             <li className='mt-3 bullet'>You code when you want, where you want</li>
             <li className='mt-3 bullet'>This is perfect for individuals with familes, full time jobs or both!</li>
             <li className='mt-3 bullet'>You're free to put in as much <i>or as little</i> time as you need.</li>
             <li className='mt-3 bullet'>Just be sure to use your time wisely!</li>
           </ul>
         </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} className='no-underline black-font' variant="link" eventKey="1">
            You can stay DEBT FREE by not attending Bootcamps and Traditional 4 year colleges
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
         <Card.Body className='mt-3'>
           <ul className='bullet-list'>
             <li className='bullet'>Bootcamps and 4 year colleges are expensive and sometimes that is just not a viable option </li>
             <li className='mt-3 bullet'>You can teach yourself how to code for the low price of $0 </li>
             <li className='mt-3 bullet'>You will not have a structured learning enviornment so it will be on you to hold yourself accountable</li>
             <li className='mt-3 bullet'>We will provide you with the materials you need to get started!</li> 
           </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header> 
          <Accordion.Toggle as={Button} className='no-underline black-font' variant="link" eventKey="2">
            You avoid the for profit education trap and can save your GI Bill for the education you know will benefit you!
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
           <Card.Body className='mt-3'>
             <ul className='bullet-list'>
              <li className='bullet'>It's no secret for profit institutions are known for using predatory tactics on Veterans</li>
              <li className='bullet'>With self teaching you're able to see if coding is a viable career route for you before commiting your GI Bill</li>
              <li className='mt-3 bullet'></li>
             </ul>
           </Card.Body>
        </Accordion.Collapse>
   </Card>
   </Accordion>
      </Col>
    </Row>
    <div className='centered-title'>Veteran Owned And Operated</div>
    <Row className={'mb-3 mt-3'}>
      <Col sm={12} md={6} xs={{ order: 'last'}} md={{order: 'first'}}>
      <Card border='0'>
       <Card.Body>
       I'm Michael White, the Founder of Camo To Code. I served 4 years in the United States Marine Corps as a Supply Admin. and Logistics Clerk with a tour
       in the desert paradise known as Afghnistan in 2010.
       </Card.Body>
       <Card.Body>
         I attained My Bachelors Degree in Business Administration in 2016 and found myself doing the same work I was doing in Marine Corps, just with better pay and bonuses. 
         There was no passion, no growth, just work. I stumbled accross coding and web development in October of 2020 and knew that this was what I wanted to do. I had already used 
         my GI bill and was working a full time job so the self taught route was the only way I could go. 
       </Card.Body>
       <Card.Body>
         I want to help ALL of my fellow brothers and sisters in arms that are trying to make the same leap. I want
         to provide you with the framework needed to make the transition to a career in thech.   
       </Card.Body>
   </Card>
      </Col>
      <Col sm={12} md={6}>
      <Card>
       <Card.Img src={me}className={'box-shadow'} />
   </Card>
      </Col>
    </Row>
    <div className='smaller-centered-title mb-5'>As a Veteran YOU have the self discipline required to get this done!</div>
    <div className='centered-title'>Our Mission</div>
    <Row className={'mb-3 mt-3'}>
      <Col sm={12} md={6}>
      <Card border='0'>
       <Card.Body>
       Our mission is to help every Veteran we possibly can successfully make the career jump into the world of tech
       in the most cost effective manner possible! 
       </Card.Body>
       <Card.Body>
       We fought side by side in the sandbox, now its time to stand shoulder to shoulder back home
       and make sure we all succeed!
       </Card.Body>
   </Card>
      </Col>
      <Col sm={12} md={6}>
      <Card>
       <Card.Img src={office} className={'box-shadow'} />
   </Card>
      </Col>
    </Row>
  </Container>

  )
}

export default AboutUsInfo