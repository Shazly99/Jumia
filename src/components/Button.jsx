import React from 'react'
import { motion } from 'framer-motion';

function Button({ title }) {
  return (
    <>
      <motion.div
                  animate={{ y: 0 }}
                  whileInView={{ y: [100, 2], opacity: [0, 1] }}
                  transition={{ type: 'tween', duration: 0.5 ,delay:1}}
                  initial={{ y: -200 }}
                  whileHover={{scale:1.1}}
      >
        <button className='btn__bg btn '>{title}</button>
      </motion.div>
    </>
  )
}

export default Button