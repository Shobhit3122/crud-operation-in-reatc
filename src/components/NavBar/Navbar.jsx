import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
      <div className='navbar'>
          <ul>
              <li>
                  <Link to= "/user">Users</Link>
              </li>
              <li>
                  <Link to="/create-user">Create user</Link>
              </li>
              <li>
                  <Link to="/search">Search</Link>
              </li>
          </ul>
    </div>
  )
}

export default Navbar;