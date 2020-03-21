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
            p1
            p2
          }
        }
      }
      `}
      render={data => 
      <div id="about" className={aboutStyles.container}>
        <h1>{data.markdownRemark.frontmatter.h1}</h1>
        <p>{data.markdownRemark.frontmatter.p1}</p>
        <p>{data.markdownRemark.frontmatter.p2}</p>
      </div>}
    ></StaticQuery>

  )
  
  export default About