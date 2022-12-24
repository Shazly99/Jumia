import React from 'react'
import { Container } from 'react-bootstrap'
import img from "../../assets/Img";
import Component from '../../constants/Component';
import { motion } from 'framer-motion';

function People() {
  return (
    <>
      <Container className='d-flex justify-content-center flex-column align-items-center'>
        <motion.div
          animate={{ y: 0 }}
          whileInView={{ y: 0, opacity: [0, 1], scale: [0, 1.1] }}
          transition={{ type: 'tween', duration: 2 }}
          initial={{ y: 200 }} 
        >
          <img src={img.people} className='app__home__people-img' />
        </motion.div>
        <div className="app__home__people-header">
          <Component.Header title={'Empower, connect, build'} />
        </div>
        <p className="app__home__people-p w-50  text-center">
          At the heart of our success is a group of entrepreneurs who are passionate about Africa and its digital transformation.
        </p>
        <Component.Btn title='People' />
      </Container>
      <Container fluid className='position-relative'>
        <motion.div
          animate={{ y: 0 }}
          whileInView={{ y: 0, opacity: [0, 1], scale: [0, 1.1] }}
          transition={{ type: 'tween', duration: 2 }}
          initial={{ y: 200 }} 
        >

          <img src={img.commitment} className='w-100 py-5' alt="" />
        </motion.div>
 
          <h1 style={{ fontSize: '80px' }} className='position-absolute overlay-img text-light d-flex gap-3'><span>Our</span> <span style={{ color: '#f55203' }}>Commitment</span></h1>
      </Container>
    </>
  )
}

export default People