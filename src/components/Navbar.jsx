import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <nav className=' bg-black text-white  mt-4'>
      
        <ul className='flex justify-evenly'>
         <li> <Link to='/'>Home</Link></li>
         <li> <Link to='Contact'>Contact</Link></li>
         <li> <Link to='About'>About</Link></li>
         <li> <Link to='Product'>Product</Link></li>
         <li> <Link to='Service'>Service</Link></li>

           
        </ul>
       
    </nav>
    </>
  )
}

export default Navbar