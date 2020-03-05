import React from "react"

import aboutStyles from "./about.module.css"

const About = () => {
    
    return (
        <div id="about" className={aboutStyles.aboutContainer}>
            <h1 className={aboutStyles.aboutH1}>What We're About</h1>
            <p>Lakewood’s full-service salon, spa, & shop. Local independent professionals, offering a variety of services & products. We take pride in the diversity of our city, as well as in the beauty industry. Our down-to-earth, informative approach to style is the hallmark of our service. We stay up-to-date on the latest trends, specializing in men, women, children, wax hair removal, & relaxing spa services. Local crafted natural skin care & apothecary products, jewelry & accessories made by Cleveland’s own talented artists.</p>
        </div>
    )
}

export default About