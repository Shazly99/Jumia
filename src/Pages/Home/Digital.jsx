import React from 'react'
import img from "../../assets/Img"; 
import { Col, Container, Row } from 'react-bootstrap';
import Com from '../../constants/Component';

function Digital() {
  return (
    <Container fluid='md'>
    <Row> 
        <Col xl={7} lg={7} md={7} sm={12}>
            <img src={img.business} className='w-100' />
        </Col>
        <Col  xl={5} lg={5} md={5} sm={12}>
            <h1 className='app__home__digital-h1'>A Digital Africa</h1>
            <p className='app__home__digital-p'>We are the leading pan-African e-commerce platform active across 11 countries in the continent. Our platform consists of a marketplace connecting thousands of sellers to millions of consumers, with integrated logistics and digital payment services.</p>
            <Com.Btn title='More about business'/>
        </Col>
    </Row>
</Container>
  )
}

export default Digital
