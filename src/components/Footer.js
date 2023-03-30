import React from 'react'
import { navData, socialMedia } from './data'

const Footer = () => {
  return (
    <footer className="section footer">
    <ul className="footer-links">
      {navData.map((data) =>
      {

    
    return (  <li key={data.id}>
        <a href={data.href} className="footer-link" rel="noreferrer">{data.name}</a>
      </li>);

})}
    
    </ul>
    <ul className="footer-icons">
      {socialMedia.map((data) =>
      {

    
     return ( <li key={data.id}>
        <a href={data.href} target="_blank" className="footer-icon" rel="noreferrer"
          ><i className={data.className}></i
        ></a>
      </li>);
   
    })}
    </ul>
    <p className="copyright">
      copyright &copy; Backroads travel tours company
      <span id="date">{new Date().getFullYear()}</span> all rights reserved
    </p>
  </footer>
  )
}

export default Footer