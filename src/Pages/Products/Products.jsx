import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { fetchData } from '../../Hooks/fetchData'
import './Products.scss'
import { GameOptions } from './../../Hooks/fetchData';
function Products() {
  const [data, setData] = useState('')

  async function get() {
    let data = await fetchData(`https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list`, GameOptions); 
    console.log(data.results      );
  }

  useEffect(() => {
    get()
  }, [])

  return (
    <div>
      <Row>
        {/* {
          data && <>
            {data.map((item, index) => (
              <Col md={3}>
                <img src={item.images[1]} className='w-100' alt="" />
                <span>{item.title}</span>
              </Col>
            ))}
          </>
        } */}
      </Row>

    </div>
  )
}

export default Products