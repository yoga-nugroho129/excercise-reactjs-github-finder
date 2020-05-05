import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar">
      <h1>
        <i className={icon}></i> {title}
      </h1>
      <div className="navbar-nav">
        <ul className="navigator">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default Navbar
