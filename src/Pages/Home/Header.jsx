import React from 'react'
import { motion } from 'framer-motion';

function Header({ title }) {
  return (
 
      <motion.div
        animate={{ y: 0 }}
        whileInView={{ y: [-100, 2], opacity: [0, 1] }}
        transition={{ type: 'tween', duration: 1 }}
        initial={{ y: -300 }}
      > 
        <h2 className='app__home-h1  py-5 text-center'>{title}</h2>
      </motion.div>
  
  )
}

export default Header
