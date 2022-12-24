import React from 'react'
import img from "../../assets/Img";
import { Col, Container, Row } from 'react-bootstrap';
import Com from '../../constants/Component';
import { motion } from 'framer-motion';

function Digital() {
  return (
    <Container fluid='md' >
      <Row className=' d-flex justify-content-center align-items-center'>
        <Col xl={7} lg={7} md={7} sm={12}>
          <motion.div
            animate={{ y: 0 }}
            whileInView={{ y: 0, opacity: [0, 1] }}
            transition={{ type: 'tween', duration: 2 }}
            initial={{ y: 200 }}
            whileHover={{ scale: 1.1 }}
          >
            <img src={img.business} className='w-75' />
          </motion.div>
        </Col>
        <Col xl={5} lg={5} md={5} sm={12}>
          <motion.div
            animate={{ y: 0 }}
            whileInView={{ y: [-100, 2], opacity: [0, 1] }}
            transition={{ type: 'tween', duration: 1, delay: 1 }}
            initial={{ y: -300 }}
          >
            <h1 className='app__home__digital-h1'>A Digital Africa</h1>
          </motion.div>
          <motion.div
            animate={{ x: 0 }}
            whileInView={{ x: [100, 2], opacity: [0, 1] }}
            transition={{ type: 'tween', duration: 1 }}
            initial={{ x: -400 }}
          >
            <p className='app__home__digital-p'>We are the leading pan-African e-commerce platform active across 11 countries in the continent. Our platform consists of a marketplace connecting thousands of sellers to millions of consumers, with integrated logistics and digital payment services.</p>
          </motion.div>
          <Com.Btn title='More about business' />
        </Col>
      </Row>
    </Container>
  )
}

export default Digital
