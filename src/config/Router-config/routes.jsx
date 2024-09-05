import React from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'

import Home from '../../screens/Home'

import Contact from '../../screens/Contact'
import Navbar from '../../components/Navbar'
import Service from '../../screens/Service'
import Product from '../../screens/Product'
import Singlecard from '../../screens/singleproduct'
import About from '../../screens/About'



const Routing = () => {
  return (
    <>
    
    <Router>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='Service' element={<Service/>}/>
        <Route path='Product' element={<Product/>}/>
        <Route path='About' element={<About/>}/>

        <Route path='singleproduct/:id' element={<Singlecard />} />

        

     </Routes>
    </Router>
    </>
  )
   
}

export default Routing