import React from "react"

import scrollTo from 'gatsby-plugin-smoothscroll';
import headerStyles from "./header.module.css"


class Header extends React.Component {
  
  render () {
    return (
      <div className={headerStyles.stickyContainer}>
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

}

export default Header
