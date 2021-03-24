import React, { useState, useEffect} from "react"
import { useStaticQuery, graphql } from "gatsby"

import '../styles/index.css'
import {Helmet} from "react-helmet"
import icon from "../../static/admin/favicon.png"

import Header from "../components/header"
import PopUp from "../components/element-components/popup.js"
import Hero from "../components/hero.js"
import About from "../components/about.js"
import Loc from "../components/loc.js"
import Services from "../components/services.js"
import Book from "../components/book.js"

const IndexPage = () => {

    const data = useStaticQuery(graphql`
    {
        markdownRemark(frontmatter: {title: {eq: "pop-up"}}) {
            frontmatter {
                expirationInDays
            }
        }

    }
    `)

    const [cookie, setCookie] = useState({isCookie:true})
    const newCookie = `visited=true; max-age=${data.markdownRemark.frontmatter.expirationInDays * 60 * 60 * 24}`; 
    
    useEffect(() => {
        if (!document.cookie.split(';').some((item) => item.trim().startsWith('visited='))) { //check to see if a cookie has been placed, if not this is a 'first visit'
            setCookie({isCookie:false});
            document.cookie = newCookie; //place cookie on first visit
        }
      }, [])

      const [widgetLoaded, setWidgetLoaded] = useState(false)

      useEffect(() => {
          const vigaroWidget = document.querySelector('vagaro-container')
          setWidgetLoaded(!!vigaroWidget)
      }, [])

      console.log(widgetLoaded)

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

                <PopUp cookie={cookie.isCookie}/>
                
                <Header />

                <Hero />
                
                <About />

                <Services />

                <Book />

                <Loc />
            </div>
    )
}

export default IndexPage
