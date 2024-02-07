import React from 'react'
import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {
  return (
    <div className='mx-auto flex justify-between items-center h-[80px]'>
      <div className='font-bold text-[20px] lg:text-[22px]'>
        <Link to="/">Ebuka.code</Link>
      </div>
      <div className='space-x-4 font-bold hidden lg:block lg:text-[18px]'>
        <Link to="/">Home</Link>
        <a href='#About'>About</a>
        <a href='#Project'>Projects</a>
        <Link to="/contact">Contact-me</Link>
      </div>
      <div className='lg:hidden'>
        HI
      </div>
        
    </div>
  )
}

export default Navbar;
