import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Com from '../../constants/Component';
import './home.scss'
import img from "../../assets/Img";
import Typed from 'react-typed';
import { motion } from "framer-motion"

function HomePage() {
    return (
        <div className='app__home     d-flex justify-content-center align-content-center flex-column'>


            <Com.Header title="The Leading E-commerce Platform in Africa" />
            <Row>

                <Col xl={4} lg={4} md={5} sm={12} >
                    <motion.div
                        animate={{ x: 0 }}
                        whileInView={{ x: [-100, 2], opacity: [0, 1] }}
                        transition={{ type: 'tween', duration: 1 }}
                        initial={{ x: -300 }}

                    >
                        <h1 className='app__home-left-h1'>Empower <br /> Connect<br />
                            <Typed
                                strings={['Shape', 'Upgrade', 'Grow', 'Build']}
                                typeSpeed={100}
                                loop
                                className='app__home-typed'
                            />
                        </h1>
                        <h3 class="app__home-left-h2">100% Africa, 100% Internet</h3>
                        <Com.Btn title="About Jumia" />
                    </motion.div>
                </Col>

                <Col xl={7} lg={7} md={6} sm={12} className='d-flex offset-xl-1   justify-content-end'>
                    <motion.div
                        animate={{ x: 200 }}
                        whileInView={{ x: 0, opacity: [0, 1] }}
                        transition={{ type: 'tween', duration: 1 }}
                        initial={{ x: 200 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <img src={img.header} className='app__home-img w-100' />
                    </motion.div>
                </Col>
            </Row>
            <div>
            </div>
        </div>
    )
}

export default HomePage