import React from 'react'
import { Col, Row } from 'react-bootstrap'
import img from '../../assets/Img'
import Component from '../../constants/Component';



function Header({ product }) { 

    return (
        <>
            <Row className='mt-3 m-auto d-flex justify-content-center  '>
                <Col className='overflow-hidden shadow p-0 m-0' xl={8}>
                    <img src={img.bgProdect} className='  rounded-2   w-100 ' />
                </Col>
                <Col className='d-flex   offset-1 d-flex gap-4 flex-column overflow-hidden' xl={3} >
                    <img src={img.Artboard} className='app__bgProdect-left rounded-2 shadow w-100 ' />
                    <img src={img.Artboard2} className='app__bgProdect-left rounded-2 shadow  w-100 ' />
                </Col>

            </Row>
               <Component.SliderHeader product={product}/>  

        </>
    )
}

export default Header
