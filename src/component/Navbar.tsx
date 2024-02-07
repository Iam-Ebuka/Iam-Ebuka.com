import React from 'react'
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className='bg-black container px-50px mx-auto flex justify-between items-center h-[60px] text-white'>
      <div className='font-bold text-[20px]'>
        <Link to="/">Ebuka.code</Link>
      </div>
      <div className='space-x-3 font-[500] hidden lg:block'>
        <Link to="/">Home</Link>
        <a>About</a>
        <a>Projects</a>
        <Link to="/contact">Contact-me</Link>
      </div>
      <div className='lg:hidden'>
        HI
      </div>
        
    </div>
  )
}

export default Navbar;
