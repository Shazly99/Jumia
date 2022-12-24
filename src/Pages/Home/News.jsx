import React from 'react'
import { Container } from 'react-bootstrap'
import Component from '../../constants/Component'
import news from './data'
import { motion } from 'framer-motion';

import icon from "../../constants/Icons";
function News() {
    console.log(news);
    return (
        <>
            <Container className='d-flex justify-content-center align-items-center flex-column '>
                <Component.Header title='Our latest news' />
                <div className="news d-flex gap-4 flex-column  mb-5 row w-100" >
                    {
                        news?.map((item, index) => {
                            return <motion.div
                            
                            animate={{ y: 0 }}
                            whileInView={{ y: 0, opacity: [0, 1], scale: [0, 1.1] }}
                            transition={{ type: 'tween', duration: 2,delay:0.5 }}
                            initial={{ y: 400 }}

                            >
                                <div key={index} className="news__card col-md-12   shadow rounded-3 p-3">
                                    <div>
                                        <h3 className='news__card-h3'>{item.dec}</h3>
                                        <p className='news__card-p'>{item.data}</p>
                                    </div>
                                    <icon.arrow className='news__card__icon' />
                                </div>
                            </motion.div>
                        })
                    }
                </div>
                <Component.Btn title="Press" />
            </Container>
        </>
    )
}

export default News
