import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Col, Row, ListGroup, Container, ListGroupItem } from 'react-bootstrap'
import study1 from '../images/study.jpg'
import { Link } from 'react-router-dom';


function HomeInfo() {
  return (
    <Container fluid className='no-padding'>
    <Row className={'mb-3 mt-3'}>
    <Col sm={6}>
   <Card border='0'>
       <Card.Title className='centered-title'> Are you a <u>Veteran</u> considering a career in tech?</Card.Title>
       <Card.Body>
       We offer free resources for you to learn and self educate the essentials for a sucessfull transition to a career in tech.
       There's an ocean of information out there when you choose the self taught path. Thats why we're here. We
       want to cut through the fluff and get you right back into the fight with the tools you need to accomplish your mission.
       </Card.Body>
       <ListGroup className='list-group-flush'>         
         <ListGroupItem className='list-group-item list-group-item-action grow'> <a className='blue-text' href='https://michaelwhite.hashnode.dev/so-you-want-to-learn-how-to-code-what-next'>I want to learn how to code. What next?</a></ListGroupItem>
         <ListGroupItem className='list-group-item list-group-item-action grow'> <a className='blue-text' href='https://www.freecodecamp.org/news/how-to-choose-a-programming-language-and-escape-tutorial-purgatory/'>How Do I choose a language?</a></ListGroupItem>
         <ListGroupItem className='list-group-item list-group-item-action grow'> <a className='blue-text' href='https://www.developerdrive.com/best-places-learn-how-to-code/'>I know what language I want to learn, Where do I go to learn it?</a></ListGroupItem>
         <ListGroupItem className='list-group-item list-group-item-action grow'> <a className='blue-text' href='https://www.freecodecamp.org/news/10-tips-for-success-when-youre-learning-to-code-65ff55a52bed/'> How can improve the self  education process?</a> </ListGroupItem>
         <ListGroupItem className='list-group-item list-group-item-action grow stand-out-border'> <Link to='/about' className='stand-out-border-text'>Learn More About Camo To Code</Link></ListGroupItem>
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