import React from "react"

import scrollTo from 'gatsby-plugin-smoothscroll';
import heroStyles from "./hero.module.css"
import logo from "../images/logo.png"

const Hero = () => {
    const href = "https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVGhtNR386VJFxo/FS1ttYn7Wgk+7oAMT5Geh0JTfFvoMF3Q1SGkkKk1qRUfkdVHtBLUIoJw7Xuq1kbJ8y2HD2SHPO8ogWU+ErJoJhwoPj0vH+ZDc4RO5wpCspFnDBWzjkxfHMH+N14R49Pi5NnWO6KS8THnSG8K65s7mmygc4k1vpmrUG/R8c5sbelNOWfYbstNXLoKphreXm5Lio+ffBSmKsodlrVN0s7lcXkCgR4EciGgiPL/GAU3jpWNaDJP58lZgxKMrqSS9nRWO7gQpNGia5cIpDMKJzkmqE2jgKmcr/7+IMOw7FSuIpt3svOSTKg=="
    return (
        <div className={heroStyles.container} id="home">
            <div className={heroStyles.logoImg}>
                <img src={logo} alt="The Emerald Room logo" />
            </div>
            <h1 className={heroStyles.heroH1}>SALON. SPA. SHOP.</h1>
            {/* <button className={heroStyles.bookButton} onClick={() => scrollTo('#book')} onKeyDown={() => scrollTo('#book')}>Book an Appointment</button> TEMP COMMENT WHILE WE FIX THE COPONENT*/}
            <button className={heroStyles.bookButton} onClick={() => window.location = href} onKeyDown={() => window.location = href}>Book an Appointment</button>
            <div className={heroStyles.arrow}></div>
        </div>
    )
}

export default Hero