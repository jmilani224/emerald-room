import React from "react"
import { StaticQuery, graphql } from "gatsby"

import aboutStyles from "./about.module.css"

const About = () => (
  
    <StaticQuery
      query={graphql`
      {
        markdownRemark(frontmatter: {title: {eq: "about"}}) {
          frontmatter {
            h1
          }
          html
        }
      }
      `}
      render={data => 
      <div id="about" className={aboutStyles.container}>
        <h1>{data.markdownRemark.frontmatter.h1}</h1>
        <div dangerouslySetInnerHTML={{__html:data.markdownRemark.html}}></div>
      </div>}
    ></StaticQuery>

  )
  
  export default About