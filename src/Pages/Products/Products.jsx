import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Component from '../../constants/Component';
import useFetch from './../../Hooks/useFetch';
import './Products.scss'
function Products() {
  // const [products, setProduct] = useState('')
  let { product } = useFetch('https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list')


  console.log(product);
  return (
    <div>
      <Container>
        <Component.HeaderProduct product={product}/>
        <Row  className='mt-4'>
          <h1>Woman's Clothing</h1>
          {
            product ? <>
              {product.map((item, index) => (
                <Col key={index} md={3}>
                  <img src={item.galleryImages[2]?.url} className='w-100' alt="" />
                  <span>{item.name}</span>
                </Col>
              ))}
            </> :
              <h1>shazloka</h1>

          }
        </Row>
      </Container>

    </div>
  )
}

export default Products