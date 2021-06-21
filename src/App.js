import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react'
import Home from './Home/Home'
import Footer from './Footer/Footer'
import { Container, Nav, Navbar,} from 'react-bootstrap'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom'
import AboutUs from './AboutUs/AboutUs'
import icon from '../src/images/icon.jpg'
import { Helmet } from 'react-helmet'




function App() {


  return (
    <Router>
    <Container fluid className='app no-padding'>
      <Helmet>
        <title>Camo To Code</title>
        <meta name='description' content='A free resource made for Veterans looking to transition into a career in web development!' />
        <meta name='keywords' content='camo to code, learn to code, coding resources for veterans, veterans learning to code,
        veteran, veteran services, learn to code for free, free coding tools, cammo to code, cammtocode, camo 2 code' />
      </Helmet>
    <Navbar className='custom-nav mr-auto mb-5' collapseOnSelect expand='sm' fixed='top'>
        <NavLink to='/'><Navbar.Brand><img src={icon} alt='Camo to Code Logo'className='nav-icon'/></Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto'>
               <Nav.Link as={Link} style={{color: 'white'}}to='/'>Home</Nav.Link>
                <Nav.Link as={Link} style={{color: 'white'}}to='/about'>About Us</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
        <Switch>
        <Route exact path='/'>
        <Home className='center-content'
        />
        </Route>
        <Route path='/about'>
          <AboutUs

          />
        </Route>
        </Switch>
        <Footer 
        />
      </Container>
      </Router>
     


  );
}

export default App;
