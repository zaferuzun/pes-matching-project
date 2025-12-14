import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Pes Matches App</h1> 
    <ul className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist"   style={{
                "--bs-nav-link-color": "var(--bs-white)",
                "--bs-nav-pills-link-active-color": "var(--bs-primary)",
                "--bs-nav-pills-link-active-bg": "var(--bs-white)"
        }}>
        <li className="nav-item" role="presentation">
            <NavLink className="nav-link rounded-5" id="home-tab2"to="/" >Home</NavLink>
        </li>
        <li className="nav-item" role="presentation">
            <NavLink className="nav-link rounded-5" id="profile-tab2" to="/teams">Teams</NavLink>
        </li>
        <li className="nav-item" role="presentation">
            <NavLink className="nav-link rounded-5" id="contact-tab2" to="/matches" >Match</NavLink>
        </li>
    </ul>
    </header>
  )
}


export default Header;