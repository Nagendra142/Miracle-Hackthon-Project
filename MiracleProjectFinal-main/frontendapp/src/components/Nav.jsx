import React from 'react'
import {Link} from 'react-router-dom'
import useContextApi from '../context/ServiceContext'
const Nav = () => {
  const {login} =useContextApi;
  return (
    <div className='nav-container'>
      <div >
        <ul className='nav-home'>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/customer'}><li>Customer</li></Link>
            <Link to={'/mechanic'}><li>Mechanic</li></Link>
            {login===true ? <Link to={'/signin'}><li>M Sign out</li></Link>:<Link to={'/signin'}><li>M Sign in</li></Link>}
            
            {/* <li>Customer</li>
            <li>Mechanic</li> */}
        </ul>
      </div>
    </div>
  )
}

export default Nav
