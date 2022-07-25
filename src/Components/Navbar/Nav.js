import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <div className='nav'>
        <ul>
          <Link to='/'>HOME</Link>
          <Link to='/About'>ABOUT</Link>
          <Link to='/Services'>SERVICES</Link>
          <Link to='/Projects'>PROJECTS</Link>
          <Link to='/News'>NEWS</Link>
          <Link to='/Social'>SOCIAL</Link>
          <Link to='/Profile'>PROFILE</Link>
          <Link to='/Contact'>CONTACT US</Link>

        </ul>
    </div>
  )
}

export default Nav