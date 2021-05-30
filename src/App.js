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




function App() {


  return (
    <Router>
    <Container fluid style={{paddingLeft:'0', paddingRight:'0'}}>
    <Navbar className='custom-nav mr-auto mb-5' collapseOnSelect expand='lg' fixed='top'>
        <NavLink to='/'><Navbar.Brand><img src={icon} style={{height:'50px', width: '80px'}}/></Navbar.Brand></NavLink>
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
        <Home 
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
