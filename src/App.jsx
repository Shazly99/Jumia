import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import comp from './constants/Component.js';


import './style/App.scss';
import MainLayout from './Layouts/MainLayout'; 
import { useState } from 'react'; 
import { motion, useScroll, useSpring } from "framer-motion";

function App() {


  const root = createBrowserRouter([{
    path: '', element: <comp.MainLayout />, children: [
      { index: true, element: <comp.Home /> },
      { path: '/Products', element: <comp.Products /> },
      { path: '/Cart', element: <comp.Cart /> },
      { path: '/Contact', element: <comp.Contact /> },
      { path: '/Login', element: <comp.Login /> },
      { path: '/Register', element: <comp.Register /> },
      { path: '/*', element: <comp.Notfound /> },
    ]
  }])

  const [Mov, setMov] = useState(false)
  return (

    <> 

       <RouterProvider router={root}></RouterProvider> 
      {/* <div className="example-container">
        <motion.div className='d-flex justify-content-center align-items-center'
          animate={{ x: Mov?200:-200 ,rotate:[0,200,100,0]}}
          initial={{x:-550}}
          transition={{type:'tween' , duration:1 , repeat:2}}
          onClick={()=>{setMov(!Mov)}}
          whileHover={{scale:1.5}}
          drag
          layout
        >
          <h1>Shazly</h1>
        </motion.div> 
      </div>*/}
    </>
  );
}

export default App;
