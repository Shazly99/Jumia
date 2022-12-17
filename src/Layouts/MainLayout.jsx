import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import comp from '../constants/Component.js'
function MainLayout() {
  return (
    <>

      <comp.NavBar />
 
        <Outlet></Outlet> 
      
      <comp.Footer />
    </>
  )
}

export default MainLayout
