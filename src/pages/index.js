import React from "react"

import '../styles/index.css'
import Header from "../components/header.js"
import Hero from "../components/hero.js"
import About from "../components/about.js"
import Loc from "../components/loc.js"
import Services from "../components/services.js"
import Book from "../components/book.js"

const IndexPage = () => {
    
    return (
            <div>
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

const bodySec = document.body;
let bodyPos;
let header;
window.addEventListener('scroll', ()=>{
    header = document.querySelector('header');
    bodyPos = bodySec.getBoundingClientRect().y;
    if (bodyPos < -200 ) {
        header.style.backgroundColor = "#ffffff";
    } else {
        header.style.backgroundColor = "transparent";
    }
 });
