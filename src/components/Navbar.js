import React from 'react'
import logo from '../images/logo.svg';
import { navData, socialMedia } from './data';
const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} className="nav-logo" alt="backroads" />
        <button type="button" className="nav-toggle" id="nav-toggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      {/* <!-- left this comment on purpose --> */}
      <ul className="nav-links" id="nav-links">
      {navData.map((data) => {
        console.log(data.name);
       return  <li>
        
          <a href={data.href} className="nav-link">{data.name}</a>
        </li>
    })}
      </ul>

      <ul className="nav-icons">
        {socialMedia.map((data) => 
        {
          return  <li>
            <a href={data.href} target="_blank" rel="noreferrer" className="nav-icon"
              ><i className={data.className}></i
            ></a>
          </li>
             
        })}
      </ul>
    </div>
  </nav>
  )
}

export default Navbar