import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.scss'

import img from '../../assets/Img'
function Footer() {
  return (
    <div className='app__footer'>
      <Container>
        <Row>
          <Col xl={2} lg={2} md={2} sm={3}>
            <img src={img.iconFooter}  className='w-100' alt="" />
          </Col>
          <Col xl={1}  className='offset-1 app__footer-contant'>
          <h5 className='text-light'>About</h5>
            <ul>
              <li> Stories</li>
              <li>Locations</li>
              <li>Leadership</li>
            </ul>
          </Col>

          <Col xl={1}  className='offset-1 app__footer-contant'>
          <h5 className='text-light'>Business</h5>
            <ul>
              <li>Marketplace</li>
              <li>Logistics </li>
              <li>JumiaPay </li>
            </ul>
          </Col>

          <Col xl={2}  className='offset-1 app__footer-contant'>
          <h5 className='text-light'>People</h5>
            <ul>
              <li>Find your Drean Jop</li>
              <li>Faces of Jumia</li>
              <li>See all Opportunities</li>
            </ul>
          </Col>

          <Col xl={1}  className=' app__footer-contant'>
          <h5 className='text-light'>Press</h5>
            <ul>
              <li>News</li>
              <li>Media Kit</li>
            </ul>
          </Col>

          <Col xl={2}  className=' app__footer-contant'>
          <h5 className='text-light'>COUNTACT US</h5>
            <ul>
              <li>INVESTORS</li>
              <li>BLOG</li>
              <li>COVID-19</li>
            </ul>
          </Col>
        </Row>
      </Container>
        <p className=' text-muted text-center mt-4'>Copyright © 2022 - Jumia</p>
    </div>
  )
}

export default Footer