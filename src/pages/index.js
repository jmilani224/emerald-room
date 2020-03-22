import React from "react"

import '../styles/index.css'
import {Helmet} from "react-helmet";
import icon from "../../static/admin/favicon.png"

import Header from "../components/header"
import Hero from "../components/hero.js"
import About from "../components/about.js"
import Loc from "../components/loc.js"
import Services from "../components/services.js"
import Book from "../components/book.js"

const IndexPage = () => {
    
    return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>THE EMERALD ROOM</title>
                    <meta name="description" content="A salon in Lakewood, Ohio, offering hair, spa, and other services for everyone." />
                    <link rel="icon" 
                        type="image/png" 
                        href={icon}>
                    </link>
                </Helmet>

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
