import React from 'react'
import { Col } from 'react-bootstrap';
import Slider from 'react-slick';
import { motion } from 'framer-motion';


function SliderHeader({ product }) {
    const settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 2500,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        rtl: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
            }
        }
        ]
    };
    return (
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 1,
            ease: [0, 0.71, 0.2, 1.01]
          },
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          },
          delay:2
        }}
      >
        <div className='app__Slider mt-5 bg-light p-3 rounded-3 shadow'>
            <h3 className='px-3'>Top Picks</h3>
            <Slider {...settings} >
                {product.map((item, index) => (
                    <Col key={index} md={3}   >
                        <div className="app__slider-card">
                            <img src={item.galleryImages[0]?.url} className='w-100 mb-0 pb-0  px-3 mt-2 ' alt="" />
                            <p className='  text-center py-3'><b >Price : </b> {item.price.formattedValue}</p>
                        </div>
                    </Col>
                ))}
            </Slider>

        </div>
      </motion.div>
    )
}

export default SliderHeader