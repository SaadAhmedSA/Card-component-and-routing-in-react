import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <nav className=' bg-black text-white  mt-4 h-10'>
      
        <ul className='flex justify-evenly items-center'>
         <li> <Link to=''>Home</Link></li>
         <li> <Link to='contact'>Contact</Link></li>
         <li> <Link to='about'>About</Link></li>
         <li> <Link to='product'>Product</Link></li>
         <li> <Link to='service'>Service</Link></li>

           
        </ul>
       
    </nav>
    </>
  )
}

export default Navbar