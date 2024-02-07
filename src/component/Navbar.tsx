import React from 'react'
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact me</Link>
    </div>
  )
}

export default Navbar;
