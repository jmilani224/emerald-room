import React from "react"

import scrollTo from 'gatsby-plugin-smoothscroll';
import heroStyles from "./hero.module.css"
import logo from "../images/logo.png"

const Hero = () => {
    return (
        <div className={heroStyles.container} id="home">
            <div className={heroStyles.logoImg}>
                <img src={logo} alt="The Emerald Room logo" />
            </div>
            <h1 className={heroStyles.heroH1}>SALON. SPA. SHOP.</h1>
            <button className={heroStyles.bookButton} onClick={() => scrollTo('#book')} onKeyDown={() => scrollTo('#book')}>Book an Appointment</button>
        </div>
    )
}

export default Hero