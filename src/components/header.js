import React from "react"

import scrollTo from 'gatsby-plugin-smoothscroll';
import headerStyles from "./header.module.css"

const Header = () => {
  return (
    <div className={headerStyles.stickyContainer}>
      <header className={headerStyles.header}>
        <div className={headerStyles.title} onClick={() => scrollTo('#home')}>
          THE EMERALD ROOM
        </div>
      <nav>
        <ul className={headerStyles.navList}>
            <li className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} onClick={() => scrollTo('#home')}>Home</li>
            <li className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} onClick={() => scrollTo('#about')}>About</li>
            <li className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} onClick={() => scrollTo('#loc')}>Location</li>
            <li className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} onClick={() => scrollTo('#services')}>Services</li>
            <li className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} onClick={() => scrollTo('#book')}>Book Now</li>
        </ul>
      </nav>
    </header>
    </div>
  )
}

export default Header
