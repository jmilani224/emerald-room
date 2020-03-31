import React from "react"

import '../styles/index.css'
import {Helmet} from "react-helmet";
import icon from "../../static/admin/favicon.png"

import Header from "../components/header"
import PopUp from "../components/element-components/popup.js"
import Hero from "../components/hero.js"
import About from "../components/about.js"
import Loc from "../components/loc.js"
import Services from "../components/services.js"
import Book from "../components/book.js"

const IndexPage = () => {
    const newCookie = "visited=true; max-age=604800";
    let didVisit;
    
    if (document.cookie.split(';').some((item) => item.trim().startsWith('visited='))) { //check to see if a cookie has been placed, if not this is a 'first visit'
        didVisit = true;
    } else {
        document.cookie = newCookie; //place cookie
        didVisit = false;
        
    }
    
    return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>The Emerald Room</title>
                    <meta name="description" content="A salon in Lakewood, Ohio, offering hair, spa, and other services for everyone." />
                    <link rel="icon" 
                        type="image/png" 
                        href={icon}>
                    </link>
                </Helmet>

                <PopUp didVisit={didVisit}/>
                
                <Header />

                <Hero />
                
                <About />

                <Loc />

                <Services />

                <Book />

            </div>
    )
}

export default IndexPage
