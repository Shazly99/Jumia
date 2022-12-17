import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import comp from './constants/Component.js';


import './style/App.scss';
import MainLayout from './Layouts/MainLayout';

function App() {

  const root=createBrowserRouter([{
  path:'',  element:<comp.MainLayout/>,children:[
    {index:true,element:<comp.Home/>},
    {path:'/Products',element:<comp.Products/>},
    {path:'/Cart',element:<comp.Cart/>},
    {path:'/Login',element:<comp.Login/>},
    {path:'/Register',element:<comp.Register/>},
    {path:'/*',element:<comp.Notfound/>},
  ]
  }])

  return (
    <>
    <RouterProvider router={root}></RouterProvider>
    </>
  );
}

export default App;
