import React from 'react';
import { Link } from 'react-router-dom';

const NavItems = () => {
  
  return (
    <div>
        <ul className='nav justify-content-center '>
            <li className='nav-item'> <Link to="/" className='nav-link'>Home</Link> </li>
            <li className='nav-item'> <Link  className='nav-link' to="/breaking-bad">Breaking Bad</Link> </li>
            <li className='nav-item'> <Link  className='nav-link' to="/budget">Budget</Link> </li>
            <li className='nav-item'> <Link  className='nav-link' to="/dictionary">Dictionary</Link> </li>
            <li className='nav-item'> <Link  className='nav-link' to="/quoter">Insurance Quote</Link> </li>
        </ul>
     </div>
  )
}

export default NavItems