import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react'
import Home from './Home/Home'
import Footer from './Footer/Footer'
import { Container, Nav, Navbar,} from 'react-bootstrap'
import {
  BrowserRouter as Router,
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
    <Navbar className='mr-auto' collapseOnSelect expand='lg' fixed='top' style={{padding:'0', backgroundColor: '#0b3c60', borderBottom: '2px solid #0b3c60', borderTop: '2px solid #0b3c60', boxShadow: '1px 1px 10px'}}>
        <NavLink to='/'><Navbar.Brand><img src={icon} style={{height:'50px', width: '80px'}}/></Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
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
