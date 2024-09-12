import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './screens/Home.jsx'
import About from './screens/About.jsx'
import Contact from './screens/Contact.jsx'
import Service from './screens/Service.jsx'
import Layout from './Layout.jsx'
import Product from './screens/Product.jsx'
import Singlecard from './screens/singleproduct.jsx'
const router = createBrowserRouter([
{
  path : "/",
  element:<Layout />,
  children:[
    {
    path:"",
    element:<Home/>
  },
    {
    path:"about",
    element:<About/>
  },
    
    {
    path:"contact",
    element:<Contact/>
  },
   
    {
    path:"product",
    element:<Product/>
  },
  {
    path:"service",
    element:<Service/>
  },
   
    {
    path:"singleproduct/:id",
    element:<Singlecard/>
  },
 
  
  
]

}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router ={router}>
 

</RouterProvider>
)
