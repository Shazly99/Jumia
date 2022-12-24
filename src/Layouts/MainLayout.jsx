import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import comp from '../constants/Component.js'
import { useSpring } from 'framer-motion';
import { useScroll, motion } from 'framer-motion';

function MainLayout() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <>

      <motion.div className="progress__Nav" style={{ scaleX }} />

      <comp.NavBar />
        <div style={{ marginTop: '100px' }}>
          <Outlet></Outlet>
        </div>
      <comp.Footer />
    </>
  )
}

export default MainLayout
