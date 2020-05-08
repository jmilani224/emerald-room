import React, { useEffect, useState } from "react"

import scrollTo from 'gatsby-plugin-smoothscroll';
import headerStyles from "./header.module.css"

const Header = () => {

const [navBackground, setNavBackground] = useState({opaque:false})

const navOnScroll = () => {
    if (window.scrollY > 200){
    setNavBackground({opaque:true})
  } else {
    setNavBackground({opaque:false})
  }
}

useEffect(() => {
  window.addEventListener('scroll', navOnScroll)
}, [])

    return (
      <div 
        className={headerStyles.stickyContainer}>
        <header className={navBackground.opaque ? headerStyles.headerOpaque : headerStyles.headerClear}>
          <div className={headerStyles.title} onClick={() => scrollTo('#home')} onKeyDown={() => scrollTo('#home')}>
            THE EMERALD ROOM
          </div>
        <nav>
          <ul className={headerStyles.navList}>
              <li className={headerStyles.navItem} onClick={() => scrollTo('#home')} onKeyDown={() => scrollTo('#home')}>Home</li>
              <li className={headerStyles.navItem} onClick={() => scrollTo('#about')} onKeyDown={() => scrollTo('#about')}>About</li>
              <li className={headerStyles.navItem} onClick={() => scrollTo('#services')} onKeyDown={() => scrollTo('#services')}>Services</li>
              <li className={headerStyles.navItem} onClick={() => scrollTo('#book')} onKeyDown={() => scrollTo('#book')}>Book Now</li>
              <li className={headerStyles.navItem} onClick={() => scrollTo('#loc')} onKeyDown={() => scrollTo('#loc')}>Location</li>
          </ul>
        </nav>
      </header>
      </div>
    )
}

export default Header
