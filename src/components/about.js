import React from "react"
import { StaticQuery, graphql } from "gatsby"

import aboutStyles from "./about.module.css"

const About = () => (
  
    <StaticQuery
      query={graphql`
        {
          markdownRemark(frontmatter: {title: {eq: "about"}}) {
            html
          }
        }
      `}
      render={data => <div id="about" className={aboutStyles.aboutContainer} dangerouslySetInnerHTML={{__html:data.markdownRemark.html}}></div>}
    ></StaticQuery>

  )
  
  export default About