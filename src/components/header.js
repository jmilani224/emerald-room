import React, { useEffect, useState } from "react"

import scrollTo from 'gatsby-plugin-smoothscroll';
import headerStyles from "./header.module.css"

const Header = () => {

  const [navBackground, setNavBackground] = useState({ opaque: false })

  const navOnScroll = () => {
    if (window.scrollY > 200) {
      setNavBackground({ opaque: true })
    } else {
      setNavBackground({ opaque: false })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', navOnScroll)
  }, [])

  const href = "https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVGhtNR386VJFxo/FS1ttYn7Wgk+7oAMT5Geh0JTfFvoMF3Q1SGkkKk1qRUfkdVHtBLUIoJw7Xuq1kbJ8y2HD2SHPO8ogWU+ErJoJhwoPj0vH+ZDc4RO5wpCspFnDBWzjkxfHMH+N14R49Pi5NnWO6KS8THnSG8K65s7mmygc4k1vpmrUG/R8c5sbelNOWfYbstNXLoKphreXm5Lio+ffBSmKsodlrVN0s7lcXkCgR4EciGgiPL/GAU3jpWNaDJP58lZgxKMrqSS9nRWO7gQpNGia5cIpDMKJzkmqE2jgKmcr/7+IMOw7FSuIpt3svOSTKg=="

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
            {/* <li className={headerStyles.navItem} onClick={() => scrollTo('#book')} onKeyDown={() => scrollTo('#book')}>Book Now</li> TEMP COMMENT WHILE COMPONENT IS FIXED*/}
            <li className={headerStyles.navItem} ><a href={href}>Book Now</a></li>
            <li className={headerStyles.navItem} onClick={() => scrollTo('#loc')} onKeyDown={() => scrollTo('#loc')}>Location</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
