import React from 'react'
import I from '../../constants/Icons'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import icon from '../../assets/Images/icon.png'
import './Nav.scss'
import Badge from '@mui/material/Badge';
import { LinkContainer } from 'react-router-bootstrap';
function NavBar() {
  return (
    <>
      <Navbar className='app__navbar' expand="lg">
        <Container fluid="md" >
          <Navbar.Brand href="#">
            <img src={icon} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className='py-2'>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            > 
              <LinkContainer to={'/'}>
              <Nav.Link  >Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to={'/Products'}>
              <Nav.Link  >Products</Nav.Link>
              </LinkContainer>

            </Nav>
            <div className="btn__auth d-flex gap-3">
              <Link to={'/Login'} className='btn__bg btn '>Login</Link>
              <Link to={'/Register'} className='btn__bg btn '>Sign Up</Link>
              <Link to={'/Cart'} className='app__navbar-cart d-flex gap-2 justify-content-center align-items-center ' >
                <span>Cart</span>
                <Badge badgeContent={'1'} className='test' color="warning">
                  <I.cart fontSize={25}/>
                </Badge>
              </Link>

            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
