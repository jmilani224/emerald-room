import React from "react"
import ReactDOM from 'react-dom'

import scrollTo from 'gatsby-plugin-smoothscroll';
import headerStyles from "./header.module.css"

ReactDOM.findDOMNode(this.refs['header'])
 
const pos = ReactDOM.getBoundingClientRect(); //outputs header


class Header extends React.Component {


  render () {

    return (
      <div 
        ref='header'
        className={headerStyles.stickyContainer}
        onScroll={}>
        <header className={headerStyles.header}>
          <div className={headerStyles.title} onClick={() => scrollTo('#home')} onKeyDown={() => scrollTo('#home')}>
            THE EMERALD ROOM
          </div>
        <nav>
          <ul className={headerStyles.navList}>
              <li className={headerStyles.navItem} onClick={() => scrollTo('#home')} onKeyDown={() => scrollTo('#home')}>Home</li>
              <li className={headerStyles.navItem} onClick={() => scrollTo('#about')} onKeyDown={() => scrollTo('#about')}>About</li>
              <li className={headerStyles.navItem} onClick={() => scrollTo('#loc')} onKeyDown={() => scrollTo('#loc')}>Location</li>
              <li className={headerStyles.navItem} onClick={() => scrollTo('#services')} onKeyDown={() => scrollTo('#services')}>Services</li>
              <li className={headerStyles.navItem} onClick={() => scrollTo('#book')} onKeyDown={() => scrollTo('#book')}>Book Now</li>
          </ul>
        </nav>
      </header>
      </div>
    )
  }

const 
const bodySec = document.body;
let bodyPos;
let header;
window.addEventListener('scroll', ()=>{
    header = document.querySelector('header');
    bodyPos = bodySec.getBoundingClientRect().y;
    if (bodyPos < -200 ) {
        header.style.backgroundColor = "#ffffff";
    } else {
        header.style.backgroundColor = "transparent";
    }
 });

}

export default Header
