import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Component from '../../constants/Component'

import TextField from '@mui/material/TextField';

import './Contact.scss'
import { motion } from 'framer-motion';
function Contact() {
  return (
    <>
      <Container >
        <div className="app__content ">
          <Row>
            <Component.Header title={'CONTACT US'} />
            <Col xl={6} lg={6} md={12} sm={12}>
            <motion.div
                animate={{ y: 0 }}
                whileInView={{ y: 0, opacity: [0, 1] }}
                transition={{ type: 'tween', duration: 4 }}
                initial={{ y: 0 }}
              >
              <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Hilton%20Alexandria%20Corniche&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
              </motion.div>
            </Col>

            <Col xl={6} lg={6} md={12} sm={12} className='d-flex gap-4 flex-column'>
              <motion.div
                animate={{ y: 0 }}
                whileInView={{ y: 0, opacity: [0, 1] }}
                transition={{ type: 'tween', duration: 2 }}
                initial={{ y: 200 }}
              >
                <TextField id="outlined-basic" color="warning" label="Username" variant="outlined" className='w-100' />
              </motion.div>
              <motion.div
                animate={{ y: 0 }}
                whileInView={{ y: 0, opacity: [0, 1] }}
                transition={{ type: 'tween', duration: 2, delay: 0.5 }}
                initial={{ y: 200 }}
              >
              <TextField id="outlined-basic" type={'email'} color="warning" label="Email" variant="outlined" className='w-100' />
              </motion.div>
              <motion.div
                animate={{ y: 0 }}
                whileInView={{ y: 0, opacity: [0, 1] }}
                transition={{ type: 'tween', duration: 2, delay: 1 }}
                initial={{ y: 200 }}
              >
              <textarea placeholder='Write here your message' className='app__contact-textarea' id="" cols="80" rows="10"></textarea>
              </motion.div>
              <Component.Btn title={'Send Feedback'} className='w-100' />
            </Col>
          </Row>


        </div>




      </Container>


    </>
  )
}

export default Contact